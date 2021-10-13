import React from 'react'
import CategorySlider from '../Components/Carousels/CategoryCarousel'
import ArticleCarousel from '../Components/Carousels/ArticleCaousel';


const Home = () => {
    return(
        <div className="container  my-20">
            <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="">
                    <img src="https://via.placeholder.com/400/" alt=""/>
                </div>
                
                <div className="">
                    <ArticleCarousel />
                </div>
            </div>

            <div className="m:container mx-auto my-24">
                <CategorySlider />
            </div>
             
        </div>
    )
}

export default Home