import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Article = () => {
    const [data, setData] = useState();
    const [comments, setComments] = useState()
    const params = useParams()

    // Recuperation de l'article choisi dans la base de données
    useEffect(() => {
        fetch(
            `base de données/articles/${params}`)
            .then(res => res.json())
            .then(res => setData(res))
            .then(console.log(data));
    }, [] );

    useEffect(() => {
        fetch(`base de données/commentaires liés à l'article`)
        .then(res => res.json())
        // Fonction ici pour prendre direct les commentaires validés ?
        .then(res => setComments(res))
        .then(console.log(comments))
    }, [])

    // Filtrer les commentaires validés
    const validComments = comments.filter(comment => comment.isValid === true)
return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        {/* Date + Auteur */}


        {/*  */}
        <div>
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
        </div>
    </div>
)
}

export default Article;