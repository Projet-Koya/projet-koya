import React from "react";
import CategorySlider from "../Components/Carousels/CategoryCarousel";
import ArticleCarousel from "../Components/Carousels/ArticleCaousel";
// import "./css/Home.css";
import Image from "../assets/koya-illustration-impact .svg";

const Home = () => {
	return (
		<div className="container pt-14 ">
			<h1 className="text-center text-4xl font-extrabold text-gray-900">Yakopédia - Le blog de Koya</h1>
			<div className="pt-14  flex justify-center items-center">
				<div className="w-1/2 flex justify-center items-center">
					<img className="w-96" src={Image} alt="" />
				</div>

				<div className="w-1/2">
					<ArticleCarousel />
				</div>
			</div>

			<div className="w-full">
				<CategorySlider />
			</div>
		</div>
	);
};

export default Home;
