import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter,  faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

const  Footer = () => {
    return (
        <div>  
            <footer className="text-gr body-font bg-primary">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <i className="fas fa-cubes fa-lg text-purple-500"></i>
                    <span className="ml-3 text-xl">
                        <Link className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                            to="/">
                                <img
                                    src={Logo}
                                    alt="LOGO" 
                                    width="80px"
                                    height="40px"
                                    className=" bg-secondary"
                                />
                        </Link>
                    </span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                    quam?</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <Link href="" className="text-white hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link href="" className="text-white hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h5>Deviens Koyacteur</h5>
                        <form action="">
                            <div className="input-group mb-3">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                                <button
                                    className="bg-secondary text-white active:bg-secondart font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none my-3 ease-linear transition-all duration-150"
                                    type="button">
                                    Je m'inscrire
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Copyright:
                    <Link href="https://www.tailwind-elements.com/" className="text-gray-600 ml-1" target="_blank">Koya</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <Link to="#" className="text-secondary mx-1">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-primary text-primray"></FontAwesomeIcon>
                    </Link>
                    <Link to="#" className="text-secondary mx-1">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-primary text-primray"></FontAwesomeIcon>
                    </Link>
                    <Link to="#" className="text-secondary mx-1">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-primary text-primray"></FontAwesomeIcon>
                    </Link>
                    <Link to="#" className="text-secondary mx-1">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-primary text-primray"></FontAwesomeIcon>
                    </Link>
                    <Link to="#" className="text-secondary mx-1">
                        <FontAwesomeIcon icon={faYoutube} className="hover:text-primary text-primray"></FontAwesomeIcon>
                    </Link>
                    </span>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
