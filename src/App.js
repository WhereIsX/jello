import React from 'react';
import { Container, Grid } from '@material-ui/core';
import List from './List'
import {cloneDeep} from 'lodash'

export default class App extends React.Component {

  DOMAIN = "http://localhost:3000"

  constructor(props) {
    super(props);
    this.state = {lists: []}
    this.fetchLists = this.fetchLists.bind(this);
  }

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

  makeLists() {
    return (
      this.state.lists.map(l => {
        return (
          <List
            listId={l.id}
            key={l.id}
            title={l.title}
            cards={l.cards}
            refresh={this.fetchLists}
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
