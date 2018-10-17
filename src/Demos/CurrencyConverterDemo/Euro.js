import React from 'react'

const Euro = ({ amount }) => {
  return (
    <p>Euro: €{Math.round(amount * 0.86 * 100) / 100}</p>
  )
}

export default Euro
