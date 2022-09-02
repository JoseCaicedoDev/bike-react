import React from 'react'
import Status from '../Status'
import image from '../../resources/images/Ellipse6.png'
import image1 from '../../resources/images/Ellipse 7.png'
import image2 from '../../resources/images/Ellipse 8.png'
import image3 from '../../resources/images/Ellipse 9.png'

function StateReception () {
  const StatusDescription = {
    CurrentStatus: 4
  }
  const StatusImage = {
    1: image,
    2: image1,
    3: image2,
    4: image3
  }
  const StatusTitle = {
    1: 'Su Bicicleta ha sido recibida',
    2: 'Su Bicicleta esta en revisión',
    3: 'Su Bicicleta esta en proceso de Mantenimiento',
    4: 'Su Bicicleta esta lista para recoger '
  }

  const state = StatusDescription.CurrentStatus
  const imageUrl = StatusImage[state]
  const title = StatusTitle[state]

  return (
    <>
      <Status
        imgurl={imageUrl}
        title={title}
        CurrentStatus={StatusDescription.CurrentStatus}
      />
    </>
  )
}

export default StateReception
