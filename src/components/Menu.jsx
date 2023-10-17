function Menu({ isLogged, toggleLogin }) {
    return (
        <div>
            <ul>
                <li>Menu</li>
                <li>Головна</li>
                <li>Меню 1 </li>
                <li>Меню 2</li>
                <li>Меню 3</li>
                <li onClick={toggleLogin}>
                    {isLogged ? 'Login' : 'Logout'}
                </li>
            </ul>
        </div>
    )
};

export default Menu;