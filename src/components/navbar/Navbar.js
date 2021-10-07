import './Navbar.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Logo from '../../images/koya-logo-classic.png'
const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={Logo} alt="LOGO" className="logo"/>
                    </Link>
                    <div className="collapse navbar-collapse mx-5 ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link t-koya-secondary" to="/"  >Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link t-koya-secondary" to="/articles">Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link t-koya-secondary" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item connexion">
                                <Link className="nav-link" to="/login">Connexion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
            <hr className="bg-koya-primary"/>           
            <Switch>
                <Route path="/" exact>
                    <home />
                </Route>
                <Route path="/login">
                    <login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navbar;