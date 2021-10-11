import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "../css/Article.css"


const Article = () => {
    const [data, setData] = useState();
    // const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { title } = useParams();

// Method for an option to read more in the text
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

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
        <>
        <div className="container flex justify-center mt-10">
            <div className="flex flex-col mt-10">
            <h1 className="animate-pulse flex justify-center text-3xl">{data.data.title}</h1>
            <div className="mt-8 flex justify-center px-10 mx-10 shadow-2xl"><p className="flex justify-center text-color">
            {/* <ReadMore> */}
               <div dangerouslySetInnerHTML={{ __html: data.data.text }}>
               </div>
            {/* </ReadMore> */}
            </p></div>
            </div>
            
            </div>

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
        </>
    );
};

export default Article;