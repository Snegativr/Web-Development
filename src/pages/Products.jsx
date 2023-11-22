// Products.jsx
import React from 'react';
import { ProductProvider, useProductContext } from '../context/ProductContext';
import ProductPage from './ProductPage';
import { UserProvider } from '../context/UserContext';

function Products() {
    const {
        selectedProduct,
        handleProductSelect,
        products,
    } = useProductContext();

    return (
        <ProductProvider>
            <UserProvider>

                <div>
                    <h1>Choose product:</h1>
                    <ul className="ul-product">
                        {products.map((product) => (
                            <li key={product.id}>
                                <label>
                                    <input
                                        type="radio"
                                        name="product"
                                        value={product.id}
                                        checked={selectedProduct?.id === product.id}
                                        onChange={() => handleProductSelect(product.id)}
                                    />
                                    {product.name}
                                </label>
                            </li>
                        ))}
                    </ul>

                    {selectedProduct && typeof selectedProduct === 'object' && (
                        <ProductPage
                            product={selectedProduct}
                        />
                    )}
                </div>
            </UserProvider>

        </ProductProvider>

    );
}

export default Products;