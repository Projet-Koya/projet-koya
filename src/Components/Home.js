import React from 'react'
<<<<<<< HEAD
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
             
=======
import Popular from './lastArticle/LastArticle'


const Home = () => {
    return(
        <div className="bg-gray-50">
            <Popular />
            
>>>>>>> 506680d68b9d7bda81cc19ece82778912fc2db4f
        </div>
    )
}

export default Home;