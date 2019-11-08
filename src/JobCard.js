import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Container
} from '@material-ui/core';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';


export default function JobCard(props) {

  return (
    <React.Fragment>
      <Container maxWidth='xs'>
          <Card>
            <CardHeader
              title={props.card.content}
              action={
                <IconButton>
                  <CreateRoundedIcon/>
                </IconButton>
              }
              disableTypography={true}
            />
          </Card>
      </Container>
      <br/>
    </React.Fragment>
  )
}
