import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container my-5">
        <div className="row">
            <h1 className="pt-3">Koya</h1>
            <div className="col">
                <h4 className="my-3">Ta solution d’accompagnement à la transition écologique !</h4>
                <h6 className="my-3">Commence ici en calculant ton impact environnemental</h6>
                <button type="button" className="btn btn-secondary my-4">C'est parti !</button>
            </div>
            <div className="col">
                <img src="https://via.placeholder.com/400/" alt=""/>
            </div>

        </div>
        </div>
    )
}

export default Home;
