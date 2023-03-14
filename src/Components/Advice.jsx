import React from 'react'
import { useState } from 'react'

export default function Advice() {
    fetch('https://api.adviceslip.com/advice/7')
        .then(response => response.json())

        .then(data => {
           setAdvice(data.slip.advice)
        })
    
   const [advice, setAdvice] = useState('')
  return (
      <>
          <h1>Advice</h1>
          {advice}
      </>
  )
}
