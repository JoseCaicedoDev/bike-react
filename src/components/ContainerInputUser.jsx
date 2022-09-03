import React from 'react'
import { Input, Label } from '../elements/user/InputUser'

function ContainerInputUser (props) {
  return (
    <>
      <Input placeholder={props.placeholder} type={props.type} id={props.name} />
      <Label htmlFor={props.name}>{props.content}</Label>
    </>
  )
}

export default ContainerInputUser
