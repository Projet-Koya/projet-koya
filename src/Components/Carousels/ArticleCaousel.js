import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ArticleCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
        <div className="container my-5 cols-6">
            <h3 className="mb-10 text-2xl font-semibold">Les articles récents</h3>
            <Slider {...settings}>
                {
                    articles.map((article) => {
                        return (
                            <div className>
                                <div className="shadow-md rounded-md overflow-hidden">
                                    <div className="p-4">
                                        <h4 className="text-xl font-semibold mb-2">Title : {article.title}</h4>
                                        <p className="mb-4">{article.text}</p>
                                        <button className="bg-primary text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Plus</button>
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

export default ArticleCarousel;