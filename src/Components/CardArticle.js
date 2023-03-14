import React, { useEffect } from 'react'
import { useState } from 'react';


export default function CardArticle({article}) {
  const [select, setSelect] = useState(false);
  const [advice, setAdvice] = useState([]);

  
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice/7')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      
  }, [])
    return (
      
      <div className="Card">
        <h5>Conseil du jour : {advice}</h5>   
        <img className="image" src={article.assets.menu[0].url}  alt="pizza" />
        <p>{article.description}</p>
        <strong>{(article.category) ? ("végétarienne") : null}</strong>
        <h2> Pizza {article.name} / Prix : {article.price} €</h2>
        <input type="checkbox" name="select" value={select} onChange={() => setSelect(!select)} />
        {(article.available)?(null):(<span>Indisponible</span>)}  
    </div>
  )
}
