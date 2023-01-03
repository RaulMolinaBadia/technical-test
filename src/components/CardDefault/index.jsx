import React from 'react'
import { Card, Name, Image, Email, Surname } from './styles'
export const CardDefault = props => {
  return (
    <Card>
      <Image src={props.props.card.img.src} alt={props.props.card.img.alt} />
      <Surname>
        {props.props.card.name} {props.props.card.surname}
      </Surname>
      <Email>{props.props.card.email}</Email>
    </Card>
  )
}
