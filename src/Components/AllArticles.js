import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './css/AllArticle.css'

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
        <div className="custom-margin grid grid-cols-2 gap-4 my-16 ">
            {
                articles.map(article => {
                    return (
                        <div className="container flex flex-col shadow-2xl py-8 px-16">
                            <div>
                            <h2 className="title-font">{article.title}</h2>
                            </div>
                        <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
                        </div>
                    );
                })
            }
        </div>
    );
}
