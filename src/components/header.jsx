import { useEffect, useState } from "react";

function Header({ isLogged, toggleLogin }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked  ${count} times`;
    }, [count])

    return (
        <header>
            <h1>
                Header
            </h1>
            <button className='button-enter' onClick={() => {
                toggleLogin();
                setCount(count + 1);
            }}>
                {isLogged ? 'Login' : 'Logout'}
            </button>
        </header>
    )
};

export default Header;