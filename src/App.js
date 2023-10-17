import Header from './components/header';
import Body from './components/Body';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProductList from './components/ProductsList';
import ProductPage from './pages/ProductPage';
import './App.css';
import { useState  } from 'react';
function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);

  const products = [
    { id: 1, name: 'product 1', description:"Description 1", price:222 },
    { id: 2, name: 'product 2', description:"Description 2", price:333 },
    { id: 3, name: 'product 3', description:"Description 3", price:444 },
  ];
  const exchangeRate = 36;
  const [isLogged, setIsLogged] = useState(false);

  const handleProductSelect = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  const handleCommentAdd = (comment) => {
    setComments([...comments, comment]);
  };

  const convertPriceToUSD = () => {
    if (selectedProduct && !isNaN(selectedProduct.price) && !isNaN(exchangeRate)) {
      const priceInUSD = selectedProduct.price / exchangeRate;
      setSelectedProduct({ ...selectedProduct, priceInUSD: priceInUSD.toFixed(2) });
    }
  };


  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  return (
    <div className="App">

      <Header isLogged={isLogged} toggleLogin={toggleLogin}/>

      <Menu isLogged={isLogged} toggleLogin={toggleLogin}/>

      <ProductList products={products} handleProductSelect={handleProductSelect} selectedProduct={selectedProduct} />

      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          comments={comments}
          onCommentAdd={handleCommentAdd}
          exchangeRate={exchangeRate}
          convertPriceToUSD={convertPriceToUSD}
        />
      )}

      <Body />

      <Footer/>

    </div>
  );
}

export default App;
