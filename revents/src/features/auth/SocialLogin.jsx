import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { socialLogin } from "../../app/firestore/firebaseService";
import { closeModal } from "../../app/common/modals/modalReducer";

export default function SocialLogin() {
  const dispatch = useDispatch();

  function handleSocialLogin(provider) {
    dispatch(closeModal());
    socialLogin();
  }
  return (
    <>
      <Button
        onClick={() => handleSocialLogin("google")}
        icon='google'
        fluid
        color='google plus'
        content='Login with Google'
      />
    </>
  );
}
