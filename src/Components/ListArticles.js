import styled from 'styled-components';

const Title = "green";

const H1 = styled.h1`
  color: ${Title};
  font-weight: bold;
  text-align: center;
  margin: 0px;
  padding: 5px;
  `
const Ol = styled.ol`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    `
const Li = styled.li`
    padding: 0px;
    margin: 8px;
    `


export default function ListArticles({ fakeArticle, CardArticle }) {
    if (!fakeArticle) { return <div>Il n'y a pas d'articles</div> }
    else {

        return (
            <>
                <H1>ListArticles</H1>
                <Ol>
                    {fakeArticle.Vegetarian.map((article) => {
                        return <Li key={article.id}><CardArticle article={article} /></Li>
                    })}
                </Ol>


            </>
        )
    }
}

