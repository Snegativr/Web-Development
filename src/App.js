import Header from './components/header';
import Menu from './components/Menu';
import { UserProvider } from './context/UserContext';
import './App.css';
import { useState  } from 'react';
import { ProductProvider } from './context/ProductContext';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <ProductProvider>
    <UserProvider>
    <div className="app">
      <Header isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
      <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
    </div>
  </UserProvider>
  </ProductProvider>
  );
}

export default App;
