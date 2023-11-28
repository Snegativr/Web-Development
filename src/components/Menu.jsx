import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Debug from '../pages/Debug';
import NavigationHistory from '../context/HIstory';
import styles from '../CSS/Menu.module.css';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Header, Footer, Content } = Layout;

function AppMenu({ isLogged, toggleLogin }) {
    return (
        <Router>
            <Layout className={styles.layout}>
                <Header className={styles.menu}>
                    <div className={styles.logo}>
                        <img src="../favicon.ico" alt="Logo" />
                    </div>
                    <Menu className={styles.menu} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" className={styles.menuItem}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" className={styles.menuItem}>
                            <Link to="/products">Products</Link>
                        </Menu.Item>
                        <Menu.Item key="3" className={styles.menuItem}>
                            <Link to="/about">About us</Link>
                        </Menu.Item>
                        <Menu.Item key="4" className={styles.menuItem}>
                            <Link to="/debug">Debug</Link>
                        </Menu.Item>
                        <Menu.Item key="5" onClick={toggleLogin} className={`${styles.menuItem} ${styles.loginButton}`}>
                            {isLogged ? 'Вийти' : 'Увійти'}
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className={styles.content}>
                    <NavigationHistory>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/debug" element={<Debug />} />
                        </Routes>
                    </NavigationHistory>
                </Content>
                <Footer className={styles.footer}>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </Footer>
            </Layout>
        </Router>
    );
}

export default AppMenu;
