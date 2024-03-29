import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { signOutFirebase } from "../../app/firestore/firebaseService";
import { toast } from "react-toastify";

export default function SignedInMenu() {
  const { currentUserProfile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      navigate("/");
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUserProfile?.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing='top left' text={currentUserProfile?.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUserProfile?.id}`}
            text='My profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/account'
            text='My account'
            icon='settings'
          />
          <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
