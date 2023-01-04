import './App.css'
import { ButtonDefault } from './components/Button'
import { CardDefault } from './components/CardDefault/index'
import { data } from './dataSamples/card'
import React, { useState } from 'react'

let numPerson = 0

function App () {
  const [personState, setPersonState] = useState([])

  const addPerson = () => {
    if (numPerson === data.length) {
      setPersonState([])
      numPerson = 0
    } else {
      setPersonState([...personState, data[numPerson]])
      numPerson++
    }
    console.log(personState)
  }

  return (
    <div>
      {personState.map((items) => {
        return(
        <CardDefault
          name={items.name.first}
          surname={items.name.last}
          email={items.email}
          img={items.picture.medium}
        />)
      })}
      <ButtonDefault onClick={addPerson} />
    </div>
  )
}

export default App
