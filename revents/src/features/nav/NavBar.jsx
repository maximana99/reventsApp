import { Menu, Container, Button } from "semantic-ui-react";
import './navbar.css';

export default function NavBar() {
    return (
        <Menu inverted fixed="top" className="blue">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15 }}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button positive inverted content="Create Event"/>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}