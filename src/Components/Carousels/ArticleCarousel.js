import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/ArticleCarousel.css"
// import ReadMore from './ReadMore'

const ArticleCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getLastArticles = async () => {
      const res = await fetch('http://localhost:3001/art/article/new/lastArticles')
      const jsonRes = await res.json();
      console.log(jsonRes.data)
      setArticles(jsonRes.data)
    }

    getLastArticles();
  }, []);
  
  return (
    <div className="container custom-width">
        <h3 className="mb-10 text-2xl font-semibold">Les articles récents</h3>
          <Slider {...settings}>
            {
              articles.map((article) => {
                return (
                  <>
                    <div className="shadow-md rounded-md overflow-hidden mx-1 bg-green-100">
                      <div className="p-4 flex flex-col ">
                        <h4 className="text-xl font-semibold mb-2"> {article.title}</h4>
                        <p className="mb-4 mt-auto text-xs text-coolGray-600">Published {article.createdAt}</p>
                        <p className="mb-4">{article.text}</p>
                        <p className="mb-4 mt-auto text-xs text-coolGray-600">Last update {article.updatedAt}</p>
                        <Link to="/article/oneArticle/:title" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Read more</Link>
                      </div>
                    </div>
                  </>
                  )
                })
              }
          </Slider>
    </div>
  )
}


export default ArticleCarousel;
