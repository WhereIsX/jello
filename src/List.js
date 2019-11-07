import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Button
} from '@material-ui/core';
import JobCard from './JobCard'


export default class List extends React.Component {

  makeCards() {
    console.log(this.props.theme);

    return (
      this.props.cards.map(card => {
          return (
            <JobCard
              key={card.id}
              card={card}
            />
          )
      })
    )
  }

  handleAddCardClick() {
    console.log('hello')
  }

  render() {
    return (
        <Grid item sm={3}>
          <Paper>

            <Typography variant='h6' align='center'>
              {this.props.title}
            </Typography>

            {this.makeCards()}

            <div align='center'>
              <Button color='primary' onClick={this.handleAddCardClick}>
                Add Card
              </Button>
            </div>

          </Paper>
        </Grid>
    );
  }

}
