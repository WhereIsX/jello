import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Button,
  TextField
} from '@material-ui/core';
import JobCard from './JobCard'
import NewCard from './NewCard'

export default class List extends React.Component {

  state = {new: false}

  makeCards() {
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

  makeNewCard() {
    if (this.state.new === true) {
      return ( <NewCard listId={this.props.listId} submitNewCard={this.props.submitNewCard}/> )
    }
  }

  handleAddCardClick() {
    // console.log(this)
    // remember that `this` refers to the context it was called in,
    // use anonymous function to 'bind' this to context
    this.setState({new: true})
  }

  render() {
    return (
        <Grid item sm={3}>
          <Paper>

            <Typography variant='h6' align='center'>
              {this.props.title}
            </Typography>

            {this.makeCards()}

            {this.makeNewCard()}

            <div align='center'>
              <Button color='primary' onClick={() => this.handleAddCardClick()}>
                Add Card
              </Button>
            </div>

          </Paper>
        </Grid>
    );
  }

}
