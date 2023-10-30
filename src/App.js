import Header from './components/header';
import Body from './components/Body';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProductList from './components/ProductsList';
import './App.css';
import { useState  } from 'react';
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'product 1', description:"Description 1", price:222 },
    { id: 2, name: 'product 2', description:"Description 2", price:333 },
    { id: 3, name: 'product 3', description:"Description 3", price:444 },
  ];
  const [isLogged, setIsLogged] = useState(false);

  const handleProductSelect = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };


  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  return (
    <div className="App">

      <Header isLogged={isLogged} toggleLogin={toggleLogin}/>

      <Menu isLogged={isLogged} toggleLogin={toggleLogin}/>

      <ProductList products={products} handleProductSelect={handleProductSelect} selectedProduct={selectedProduct} />

      <Body />

      <Footer/>

    </div>
  );
}

export default App;
