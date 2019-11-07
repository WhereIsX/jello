import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Paper
} from '@material-ui/core';
import JobCard from './JobCard'

export default class List extends React.Component {

  render() {

    console.log('List props: ', this.props);

    return (
        <Grid item sm={3}>
          <Paper>
            <Typography variant='h6' align='center'>
              {this.props.title}
            </Typography>
          </Paper>
        </Grid>
    );
  }

}
