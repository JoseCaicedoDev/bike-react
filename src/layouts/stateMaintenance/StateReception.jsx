import React from 'react'
import Status from '../Status'
import image from '../../resources/images/Ellipse6.png'

function StateReception () {
  const StatusDescription = {
    CurrentStatus: 4,
    imgurl: image,
    title: 'Su vehiculo ha sido recibido'
  }

  return (
    <>
      <Status
        imgurl={StatusDescription.imgurl}
        title={StatusDescription.title}
        CurrentStatus={StatusDescription.CurrentStatus}
      />
    </>
  )
}

export default StateReception
