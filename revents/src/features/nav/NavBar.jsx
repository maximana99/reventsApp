import { Menu, Container, Button } from "semantic-ui-react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

export default function NavBar({ setFormOpen }) {
  //const history = useHistory();
  //const navigate = useNavigate();
  //const [authenticated, setAuthenticated] = useState(false);
  const { authenticated } = useSelector((state) => state.auth);

  // function handleSignOut() {
  //   navigate("/");
  // }

  return (
    <Menu inverted fixed='top' className='darkblue'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src='/assets/icon.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact='true' to='/events' name='Events' />
        <Menu.Item as={NavLink} exact='true' to='/sandbox' name='Sandbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' color='black' />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
