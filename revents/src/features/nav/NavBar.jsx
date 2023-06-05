import { Menu, Container, Button } from "semantic-ui-react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export default function NavBar({ setFormOpen }) {
  //const history = useHistory();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    navigate("/");
  }

  return (
    <Menu inverted fixed='top' className='darkblue'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src='/assets/icon.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact='true' to='/events' name='Events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' color='black' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
