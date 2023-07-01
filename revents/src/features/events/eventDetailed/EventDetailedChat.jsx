import React from "react";
import { Segment, Button, Comment, Header, Form } from "semantic-ui-react";

export default function EventDetailedChat() {
  return (
    <>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Maria</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>
                Does anyone know more about the host of the event
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Bob John</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>I know him, he's very talented, it's worth going</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='/assets/user.png' />
                <Comment.Content>
                  <Comment.Author as='a'>Maria</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Thanks for the info</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Pop Julia</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>This is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content='Add Reply'
              labelPosition='left'
              icon='edit'
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  );
}
