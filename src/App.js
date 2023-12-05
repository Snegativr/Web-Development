import Menu from './components/Menu';
import { UserProvider } from './context/UserContext';
import './App.css';
import { useState } from 'react';
import { ProductProvider } from './context/ProductContext';
import { CommentsProvider } from './context/CommentsContext';
import { Provider } from 'react-redux';
import store from './reducers/store';
function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Provider store={store}>
      <ProductProvider>
        <CommentsProvider>
          <UserProvider>
            <div className="app">
              <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
            </div>
          </UserProvider>
        </CommentsProvider>
      </ProductProvider>
    </Provider>
  );
}

export default App;
