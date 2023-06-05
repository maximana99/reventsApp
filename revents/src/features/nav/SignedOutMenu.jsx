import React from "react";
import { Menu, Button } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position='right'>
      <img src='/assets/logIIN.png' alt='logo' style={{ marginRight: 15 }} />
      <Button
        onClick={() => setAuthenticated(true)}
        basic
        inverted
        content='Login'
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
