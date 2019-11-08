import React from 'react';
import {
  TextField
} from '@material-ui/core';


export default function NewCard(props) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
    fetch(`http://localhost:3000/cards`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify({
        "content": `${value}`,
        "listId": `${props.listId}`
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))

    // submitNewCard

  }

  return (
    <div align='center'>
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          label='new card'
          onChange={handleChange}
        />
      </form>
    </div>
  )

}
