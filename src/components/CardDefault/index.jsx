import React from 'react'
import { Card, Name, Image, Email} from './styles'
export const CardDefault = ({name, surname, email, img }) => {
  return (
    <Card>
      <Image src={img} alt={name} />
      <Name>
        {name} {surname}
      </Name>
      <Email>{email}</Email>
    </Card>
  )
}
