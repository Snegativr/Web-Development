import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 111' },
    { id: 2, name: 'Product 2', description: 'Description 222' },
    { id: 3, name: 'Product 3', description: 'Description 333' },
  ];

  const handleProductSelect = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        handleProductSelect,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};