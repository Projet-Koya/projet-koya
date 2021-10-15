import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ArticleCarouselAutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 9,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
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
                      <div className="">
                        <div className="shadow-md rounded-md overflow-hidden mx-1 bg-green-100">
                          <div className="p-4 flex flex-col flex-none">
                            <h4 className="text-xl font-semibold mb-2"> {article.title}</h4>
                            <p className="mb-4 mt-auto text-xs text-coolGray-600">Published {article.createdAt}</p>
                            <p className="mb-4">{article.text}</p>
                            <p className="mb-4 mt-auto text-xs text-coolGray-600">Last update {article.updatedAt}</p>
                            <Link to="/article/oneArticle/:title" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Read more</Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                 
            </Slider>
        </div>
    )
}

export default ArticleCarouselAutoPlay;
