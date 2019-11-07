import React from 'react';
import { Container, Grid } from '@material-ui/core';
import List from './List'


export default class App extends React.Component {

  DOMAIN = "http://localhost:3000"

  state = {lists: []}

  componentDidMount() {

    fetch(`${this.DOMAIN}/lists?_embed=cards`)
    .then(res => res.json())
    .then(data => {
      this.setState({lists: data})
    })

  }

  makeLists() {
    return(
      this.state.lists.map(l => {
        return (
          <List
            key={l.id}
            title={l.title}
            cards={l.cards}
          />
        )
      })
    )
  }

  render() {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
        {this.makeLists()}
        </Grid>
      </Container>
    );
  }
}
