import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function AllArticles() {
    const { categoryID } = useParams();
    const [articles, setArticles] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("test");
        fetch(`http://localhost:3001/art/article/categoryArticle/${categoryID}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setArticles(res.data);
                setIsLoading(false);
            });
    }, []);
    console.log("test");
    if (isLoading === true) { return null; }
    return (
        <div>
            {
                articles.map(article => {
                    return (
                        <div>
                            <h2>{article.name}</h2>
                            <p>{article.text}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
