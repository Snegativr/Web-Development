import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Debug from '../pages/Debug';
import NavigationHistory from '../context/HIstory';
import '../CSS/Menu.css';

function Menu({ isLogged, toggleLogin }) {
    return (
        <>
            <Router>
                <div className="menu-container">
                    <ul className="ul-menu">
                        <li>
                            <Link to="/">Головна</Link>
                        </li>
                        <li>
                            <Link to="/products">Товари</Link>
                        </li>
                        <li>
                            <Link to="/about">Про нас</Link>
                        </li>
                        <li>
                            <Link to="/debug">Debug</Link>
                        </li>
                        <li onClick={toggleLogin} className="login-button">
                            {isLogged ? 'Вийти' : 'Увійти'}
                        </li>
                    </ul>
                    <NavigationHistory>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/debug" element={<Debug />} />
                        </Routes>
                    </NavigationHistory>
                </div>
            </Router>
        </>
    );
}

export default Menu;
