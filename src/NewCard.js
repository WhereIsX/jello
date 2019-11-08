import React from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField
} from '@material-ui/core';
import axios from 'axios';


export default function NewCard(props) {
  const [value, setValue] = React.useState('');
        console.log('value after clear ', value)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/cards', {
      content: `${value}`,
      listId: props.listId
    })
    .then(res => {
      setValue('')
      props.refresh()
    })


    // BELOW DID NOT WORK:
    // has tried various bodies with and without quotes, single quotes, backticks
    // fetch(`http://localhost:3000/cards`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'applicaton/json'
    //   },
    //   body: JSON.stringify({
    //     "content": `${value}`,
    //     "listId": `${props.listId}`
    //   })
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))

    // submitNewCard

  }

  return (
      <Container maxWidth='xs'>
          <Card>
            <CardContent>
            <form
              autoComplete='off'
              onSubmit={handleSubmit}>
              <TextField
                label='new card'
                value={value}
                onChange={handleChange}/>
            </form>
            </CardContent>
          </Card>
      </Container>
  )

}
