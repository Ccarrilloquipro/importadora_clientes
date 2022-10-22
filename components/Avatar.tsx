import React from 'react'
import { URL_ASSETS } from '../services/http'

function Avatar({ image }: any) {
    const url = image ? `${URL_ASSETS}${image}`: '/images/empty-img.jpg'
  return (
    <div className='avatar' style={{ backgroundImage: `url(${url})`}}></div>
  )
}

export default Avatar