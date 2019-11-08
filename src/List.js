import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  Button,
  Icon
} from '@material-ui/core';
import JobCard from './JobCard';
import NewCard from './NewCard';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newCard: false}
    this.handleAddCardClick = this.handleAddCardClick.bind(this);
  }

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
    if (this.state.newCard === true) {
      return ( <NewCard
        listId={this.props.listId}
        refresh={this.props.refresh}
      /> )
    } else {
      return (
        <div align='center'>
          <Button color='primary' onClick={this.handleAddCardClick}>
            <AddRoundedIcon/>
            Add Another Card
          </Button>
        </div>
      )
    }
  }

  handleAddCardClick() {
    this.setState({newCard: true})
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

          </Paper>
        </Grid>
    );
  }

}
