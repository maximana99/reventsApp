import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePage({ history }) {
  return (
    <Segment
      inverted
      textAlign='center'
      vertical
      className='masthead'
      style={{
        backgroundImage: `url('/assets/logo.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Setează înălțimea la 100% a ecranului
        width: "100%", // Setează lățimea la 100% a ecranului
        position: "fixed", // Face ca segmentul să rămână fix în fundal
        top: 0, // Așează segmentul în partea de sus a ecranului
        left: 0, // Așează segmentul în partea stângă a ecranului
      }}
    >
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            color='blue'
            style={{ marginBottom: 18 }}
          />
          Connect of Events
        </Header>
        <Button as={Link} to='/events' size='huge' inverted color='black'>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
