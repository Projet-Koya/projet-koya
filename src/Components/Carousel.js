import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    var settings = {
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

    const posts = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <div className="container">
                <h2> Multiple items </h2>
                <Slider {...settings}>
                (posts.map((index) => {
                    return (
                    <div>
                        <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="" alt="">
                        <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2">Card Title{index}</h4>
                            <p className="mb-4">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <Button variant="primary">Go somewhere</Button>
                            <button className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Button</button>
                        </div>
                        </div>
                    </div>
                    )
                }))
                </Slider>
            </div>
        </div>
    )
}

export default Carousel;
