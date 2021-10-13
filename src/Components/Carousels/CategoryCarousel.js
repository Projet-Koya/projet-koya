import React, { useEffect, useState, Link } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CategoryCarousel =() => { 
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
            {categories.map(category => { 
                return (
                  <div className="grid-cols-2">
                    <Card {...category} />
                  </div>
                )
            })}
          </Slider>
      </div>
    )
};

const Card = (category) => {
  return (
      <div className="text-center">
        <h3>{category.name}</h3>
          <img 
              src={category.picture}
              alt=""
              style={{
              width: "100%",
              height: "170px",
              objectFit: "contain",
              marginBottom: "10px",
              }}
          />
      </div>
  )
}

export default CategoryCarousel;
