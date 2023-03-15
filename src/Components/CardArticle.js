import { useState } from 'react';
import styled from 'styled-components';

const TitleCard = "green";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  width: min-content;
  background-color: lightgreen;
  filter: drop-shadow(0px 0px 5px black);
  
 `
const H2 = styled.h2`
  color: ${TitleCard};
  font-weight: bold;
  text-align: center;
  margin: 0px;
  padding: 5px;
  `

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0px;
  padding: 5px;
  filter: drop-shadow(0px 0px 5px ${TitleCard});
  `

export default function CardArticle({article}) {
  const [select, setSelect] = useState(false);
 
    return (
      
      <Card>
        <H2>{article.name}</H2>
        <Img src={article.assets.menu[0].url}  alt="pizza" />
        <p>{article.description}</p>
        <strong>{(article.category) ? ("végétarienne") : null}</strong>
        <h3>Prix : {article.price} €</h3>
        {(article.available)?(<span>Indisponible</span>):(<input type="checkbox" name="select" value={select} onChange={() => setSelect(!select)} />)}  
    </Card>
  )
}




