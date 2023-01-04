import { ContainerApp } from './styles.js'
import { ButtonDefault } from '../Button/index'
import { CardDefault } from '../CardDefault/index'
import React, { useState } from 'react'
import { usePersonsAPI } from '../../api/persons'

const apiURL = 'https://randomuser.me/api/?results=5'
let numPerson = 0
function App () {
  const [personState, setPersonState] = useState([])
  let dataAPI = usePersonsAPI(apiURL)
  console.log(dataAPI)
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
    <ContainerApp>
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
    </ContainerApp>
  )
}

export default App
