import React from 'react';
import { Container, Grid } from '@material-ui/core';
import List from './List'


export default class App extends React.Component {

  DOMAIN = "http://localhost:3000"

  state = {lists: []}

  fetchLists() {
    fetch(`${this.DOMAIN}/lists?_embed=cards`)
    .then(res => res.json())
    .then(data => {
      this.setState({lists: data})
    })
  }

  componentDidMount() {
    this.fetchLists()
  }

  submitNewCard() {
    // this.fetchLists()
  }

  makeLists() {
    return (
      this.state.lists.map(l => {
        return (
          <List
            listId={l.id}
            key={l.id}
            title={l.title}
            cards={l.cards}
            submitNewCard={this.submitNewCard}
          />
        )
      })
    )
  }

  render() {
    return (
        <Container >
          <Grid container spacing={3}>
            {this.makeLists()}
          </Grid>
        </Container>
    );
  }
}
