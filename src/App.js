import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

// Import Components
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar' ;
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}
export default App;