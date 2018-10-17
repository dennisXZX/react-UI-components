import React from 'react'

export default function Clock (props) {
  // place the props into an array, and then map over them to calculate the digit displayed
  // de-structure the results
  const [hours, minutes, seconds] = [
    props.hours,
    props.minutes,
    props.seconds
  ].map(num => num < 10 ? '0' + num : num)

  return <h1>{hours} : {minutes} : {seconds}</h1>
};