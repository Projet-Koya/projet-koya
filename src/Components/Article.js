import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Article = () => {
    const [data, setData] = useState();
    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { title } = useParams();

    // Recuperation de l'article choisi dans la base de données
    useEffect(() => {
        console.log(title);
        fetch(
            `http://localhost:3001/art/article/oneArticle/${title}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setIsLoading(false);
            });
    }, []);


    // useEffect(() => {
    //     fetch(`base de données/commentaires liés à l'article`)
    //     .then(res => res.json())
    //     // Fonction ici pour prendre direct les commentaires validés ?
    //     .then(res => setComments(res))
    //     .then(console.log(comments))
    // }, [])

    // Filtrer les commentaires validés
    //  const validComments = comments.filter(comment => comment.isValid === true)

    if (isLoading === true) { return null; }
    return (
        <div>
            <h1>{data.data.title}</h1>
            <p>{data.data.text}</p>

            {/*  */}
            {/* <div>
            <ul>
                {validComments.map(comment =>
                 ( 
                     comment.isValid && (
                <li>
                    <p>{comment.author}</p>
                    <p>{comment.content}</p>
                    <p>{comment.date}</p>
                </li>
                     )
            ))}
            </ul>
        </div> */}
        </div>
    );
};

export default Article;