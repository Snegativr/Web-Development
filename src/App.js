import Header from './components/header';
import Body from './components/Body';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProductList from './components/ProductsList';
import './App.css';
import { useState,useCallback  } from 'react';
function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'product 1', isChecked: false },
    { id: 2, name: 'product 2', isChecked: false },
    { id: 3, name: 'product 3', isChecked: false },
  ]);
  const [isLogged, setIsLogged] = useState(false);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const calculateSelectedProductCount = useCallback(() => {
    return items.filter((item) => item.isChecked).length;
  }, [items]);


  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  return (
    <div className="App">

      <Header isLogged={isLogged} toggleLogin={toggleLogin}/>

      <Menu isLogged={isLogged} toggleLogin={toggleLogin}/>

      <ProductList products={items} onProductCheck={handleCheckboxChange} />

      <Body />

      <Footer selectedProductCount={calculateSelectedProductCount()}/>

    </div>
  );
}

export default App;
