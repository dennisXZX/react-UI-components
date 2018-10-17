import React from 'react'

const Pound = ({ amount }) => {
  return (
    <p>Pound: £{Math.round(amount * 0.76 * 100) / 100}</p>
  )
}

export default Pound
