import React from 'react'
import CategorySlider from '../Components/Carousels/CategoryCarousel'
import ArticleCarousel from '../Components/Carousels/ArticleCarousel';
import "./css/Home.css"
import Image from "../assets/koya-illustration-impact .svg"

const Home = () => {
    return(
        <div className="md:container md:mx-auto">
            <div className="content flex">
                <div className="w-1/2">
                    <img src={Image} alt=""/>
                </div>
                
                <div className="w-1/2">
                    <ArticleCarousel />
                </div>
            </div>

            <div className="w-full">
                <CategorySlider />
            </div>
             
        </div>
    )
}

export default Home;