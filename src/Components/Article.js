import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../App';
import { useParams } from 'react-router';
import "./css/Article.css";
import DisplayComments from './DisplayComments';
import WriteNewComment from './WriteNewComment';


const Article = () => {
  const [data, setData] = useState();
  const LoginStatus = useContext(LoginContext);
  // const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { title } = useParams();

  // Method for an option to read more in the text
  const ReadMore = ({ children }) => {
    const text = children.props.dangerouslySetInnerHTML.__html;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? (
          <div dangerouslySetInnerHTML={{ __html: text.slice(0, 250) }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        )}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  // Recuperation de l'article choisi dans la base de données
  useEffect(() => {
    fetch(
      `http://localhost:3001/art/article/oneArticle/${title}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        console.log(res);
        LoginStatus.setArticleID(res.data._id);
        setIsLoading(false);
      });
  }, []);
  if (isLoading === true) { return null; }
  return (
    <>
      <div className="container flex justify-center mt-10 ">
        <div className="flex flex-col mt-10 w-1/2 ">
          <h1 className="animate-pulse flex justify-center text-3xl">{data.data.title}</h1>
          <div className="mt-8 flex justify-center px-10 mx-10 shadow-2xl py-8"><p className="flex justify-center text-color">
              <div className="font-black text-2xl " dangerouslySetInnerHTML={{ __html: data.data.text }}>
              </div>
            {/* <ReadMore>
            </ReadMore> */}
          </p></div>
        </div>
        {/* <DisplayComments /> */}
        {/* <WriteNewComment /> */}
        {/* {LoginStatus.LogStatus === true ? <SubArticle/> : null} */}
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