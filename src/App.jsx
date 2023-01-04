import './App.css'
import { ButtonDefault } from './components/Button'
import { CardDefault } from './components/CardDefault/index'
import React, { useState, useEffect } from 'react'
import { usePersonsAPI} from './api/persons'

const apiURL = "https://randomuser.me/api/?results=5";
let numPerson = 0
function App () {
  const [personState, setPersonState] = useState([])
  let dataAPI = usePersonsAPI(apiURL)
  console.log(dataAPI);
  const addPerson = () => {
    if (numPerson === dataAPI.results.length) {
      setPersonState([])
      numPerson = 0
    } else {
      setPersonState([...personState, dataAPI.results[numPerson]])
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
