import React, { useState } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import PhotoWidgetCropper from "./PhotoWidgetCropper";
import cuid from "cuid";
import { getFileExtension } from "../util/util";
import { uploadToFirebaseStorage } from "../../firestore/firebaseService";
import { updateUserProfilePhoto } from "../../firestore/firestoreService";
import { toast } from "react-toastify";

export default function PhotoUploadWidget({ setEditMode }) {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUploadImage() {
    setLoading(true);
    const filename = cuid() + "." + getFileExtension(files[0].name);

    try {
      // Încarcă imaginea în Firebase Storage și așteaptă finalizarea încărcării
      const uploadTask = uploadToFirebaseStorage(image, filename);
      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("bytesTransferred:", snapshot.bytesTransferred);
            console.log("totalBytes:", snapshot.totalBytes);
            console.log("progress:", progress);
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            toast.error(error.message);
            reject(error);
          },
          () => {
            // Încărcarea a fost finalizată
            resolve();
          }
        );
      });

      // Obține URL-ul descărcării imaginii și actualizează profilul utilizatorului
      const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
      await updateUserProfilePhoto(downloadURL, filename);

      // Finalizează operațiunile și resetează starea
      setLoading(false);
      handleCancelCrop();
      setEditMode(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  }

  function handleCancelCrop() {
    setFiles([]);
    setImage(null);
  }

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color='teal' sub content='Step 1 - Add Photo' />
        <PhotoWidgetDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='teal' sub content='Step 2 - Resize' />
        {files.length > 0 && (
          <PhotoWidgetCropper
            setImage={setImage}
            imagePreview={files[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='teal' sub content='Step 3 - Preview and Upload' />
        {files.length > 0 && (
          <>
            <div
              className='img-preview'
              style={{ minHeight: 200, minWidth: 200, overflow: "hidden" }}
            />
            <Button.Group>
              <Button
                loading={loading}
                onClick={handleUploadImage}
                style={{ width: 100 }}
                positive
                icon='check'
              />
              <Button
                disabled={loading}
                onClick={handleCancelCrop}
                style={{ width: 100 }}
                icon='close'
              />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
}
