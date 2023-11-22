import React from 'react';
import { useUserContext } from '../context/UserContext';

function Header({ isLogged, toggleLogin }) {
    const { user, logout } = useUserContext();

    return (
        <div>
            {user ? (
                <div>
                    <p>Вітаємо, {user.username}!</p>
                    <button onClick={logout}>Вийти</button>
                </div>
            ) : (
                <button onClick={toggleLogin}>Увійти</button>
            )}
        </div>
    );
}

export default Header;