import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Debug from '../pages/Debug';
import NavigationHistory from '../context/HIstory';
import styles from '../CSS/Menu.module.css';

function Menu({ isLogged, toggleLogin }) {
    return (
        <>
            <Router>
                <div className={styles.menu_container}>
                    <ul className={styles.ul_menu}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/debug">Debug</Link>
                        </li>
                        <li onClick={toggleLogin} className={styles.login_button}>
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
