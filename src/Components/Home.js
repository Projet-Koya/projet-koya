import React from 'react'
import CategoryCarousel from './Carousels/CategoryCarousel'
import ArticleCarousel from './Carousels/ArticleCarousel';

const Home = () => {
    return(
        <div className="md:container mx-auto my-20">
            <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="">
                    <img src="https://via.placeholder.com/400/" alt=""/>
                </div>
                
                <div className="">
                    <ArticleCarousel />
                </div>
            </div>

            <div className="m:container mx-auto my-24">
                <CategoryCarousel />
            </div>
             
        </div>
    )
}

export default Home;