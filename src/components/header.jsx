function Header({ isLogged, toggleLogin }) {
    return (
        <header>
            <h1>
                Header
            </h1>
            <button className='button-enter' onClick={toggleLogin}>
                {isLogged ? 'Login' : 'Logout'}
            </button>
        </header>
    )
};

export default Header;