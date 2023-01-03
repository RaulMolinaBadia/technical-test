import React from 'react'
import { Button } from './styles'

export const ButtonDefault = ({ onClick }) => {
  console.log(onClick);
  const handleClick = e => {
    if (onClick !== null) {
      onClick()
    }
  }
  return (
    <Button
      onClick={e => {
        handleClick(e)
      }}
    >
      Pulsar
    </Button>
  )
}

