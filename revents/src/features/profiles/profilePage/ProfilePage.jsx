import React from "react";
import { Grid } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { useDispatch, useSelector } from "react-redux";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import { getUserProfile } from "../../../app/firestore/firestoreService";
import { useParams } from "react-router-dom";
import { listenToSelectedUserProfile } from "../profileActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { selectedUserProfile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.async);
  const { id } = useParams();

  useFirestoreDoc({
    query: () => getUserProfile(id),
    data: (profile) => dispatch(listenToSelectedUserProfile(profile)),
    deps: [dispatch, id],
  });
  if (loading || error || !selectedUserProfile || !selectedUserProfile.id)
    return <LoadingComponent content='Loading profile...' />;

  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader
          profile={selectedUserProfile}
          isCurrentUser={currentUser.uid === selectedUserProfile.id}
        />
        <ProfileContent
          profile={selectedUserProfile}
          isCurrentUser={currentUser.uid === selectedUserProfile.id}
        />
      </Grid.Column>
    </Grid>
  );
}
