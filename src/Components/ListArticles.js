

export default function ListArticles({ fakeArticle , CardArticle}) {
    if (!fakeArticle) { return <div>Il n'y a pas d'articles</div> }
    else {

        return (
            <>
                <h1>ListArticles</h1>
                <ol>
                    {fakeArticle.Vegetarian.map((article) => {
                        return <li key={article.id}><CardArticle article={article} /></li>
                    })}
                   

                </ol>


            </>
        )
    }
}

