import Menu from './components/Menu';
import { UserProvider } from './context/UserContext';
import './App.css';
import { useState } from 'react';
import { ProductProvider } from './context/ProductContext';
import { CommentsProvider } from './context/CommentsContext';
function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <ProductProvider>
      <CommentsProvider>
        <UserProvider>
          <div className="app">
            <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          </div>
        </UserProvider>
      </CommentsProvider>
    </ProductProvider>
  );
}

export default App;
