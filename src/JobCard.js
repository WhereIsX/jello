import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container
} from '@material-ui/core';


export default function JobCard(props) {

  return (
    <React.Fragment>
      <Container maxWidth='xs'>
          <Card>
            <CardContent>
              <Typography variant='body2'>
                {props.card.content}
              </Typography>
            </CardContent>
          </Card>
      </Container>
      <br/>
    </React.Fragment>
  )
}
