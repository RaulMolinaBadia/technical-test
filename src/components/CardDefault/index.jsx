import React from 'react'
import { Card, Name, Image, Email, Surname } from './styles'
export const CardDefault = ({ key, name, surname, email, img }) => {
  return (
    <Card key={key}>
      <Image src={img} alt={name} />
      <Name>
        {name} {surname}
      </Name>
      <Email>{email}</Email>
    </Card>
  )
}
