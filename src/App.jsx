import './App.css'
import { ButtonDefault } from './components/Button'
import { CardDefault } from './components/CardDefault/index'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

let numPerson = 0
const apiURL = 'https://randomuser.me/api/?results=5'
function App () {
  const [personState, setPersonState] = useState([])
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(apiURL).then(response => {
      setPost(response.data)
      console.log(post.results);
    })
  }, [])
  const addPerson = () => {
    if (numPerson === post.results.length) {
      setPersonState([])
      numPerson = 0
    } else {
      setPersonState([...personState, post.results[numPerson]])
      numPerson++
    }
    console.log(personState)
  }

  return (
    <div>
      {personState.map(items => {
        return (
          <CardDefault
            name={items.name.first}
            surname={items.name.last}
            email={items.email}
            img={items.picture.medium}
          />
        )
      })}
      <ButtonDefault onClick={addPerson} />
    </div>
  )
}

export default App
