import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CategorySlider =() => { 
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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

    const [categories, setCategories] =  useState([]);

    useEffect(() => {
        const getAllCategories = async () => {
          const res =  await fetch('http://localhost:3001/cat/category/all')
          const jsonRes = await res.json();
          // console.log(jsonRes)
          setCategories(jsonRes.data); 
        }

        getAllCategories();
    }, []);
    
    return (
        <div className="container my-5">
          <h2 className="text-2xl font-semibold">Categories </h2>
          <Slider {...settings}>
              {categories.map((category) =>{
                    return (
                        <div className>
                        <div className="shadow-md rounded-md overflow-hidden">
                            <div className="p-4">
                            <h4 className="text-xl my-5">{category.name}</h4>
                            <img 
                              src={`http://localhost:3001/${category.picture}`} 
                              alt="" 
                              style={{ 
                                width: "100%", 
                                height: "40vh", 
                                objectFit: "cover",
                              }} 
                            />
                            <button className="bg-primary my-3 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Plus...</button>
                            </div>
                        </div>
                    </div>
                    )
                }
                )}
            </Slider>
          </div>
    )
}

export default CategorySlider;