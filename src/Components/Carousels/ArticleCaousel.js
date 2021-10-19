import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ArticleCarousel.css";
import { useHistory } from "react-router-dom";

const ArticleCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 4000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const history = useHistory();
	const handleClick = (articleID) => {
		history.push(`/article/${articleID}`);
	};

	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getLastArticles = async () => {
			const res = await fetch("http://localhost:3001/art/article/new/lastArticles");
			const jsonRes = await res.json();
			console.log(jsonRes.data);
			setArticles(jsonRes.data);
		};

		getLastArticles();
	}, []);

	return (
		<div className="container custom-width">
			<h3 className="mb-10 text-2xl font-semibold">Les articles récents</h3>
			<Slider {...settings}>
				{articles.map((article) => {
					return (
						<div className="bg-green-100 rounded">
							<div className="shadow-md rounded-md overflow-hidden">
								<div className="p-4">
									<h4 onClick={() => handleClick(article._id)} className="text-xl font-semibold mb-2 hover:bg-green-200">{article.title}</h4>
									<div dangerouslySetInnerHTML={{ __html: article.text }}></div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default ArticleCarousel;
