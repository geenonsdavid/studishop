import React from 'react'
import '../App.css';

export default function StudiAdresses({adresse}) {
   
    
    
    

    return (
      <>
        <div>Studi Adresses</div>
        <ol>
        {
          adresse.map((adresse) => {
            return (
              <li key={adresse.id}>
                <div>{adresse}</div>
              </li>
            )
          })
            

        }
        </ol>
      </>
      
  )
}
