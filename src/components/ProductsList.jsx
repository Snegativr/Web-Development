import React from 'react';

function ProductList({ products, handleProductSelect,selectedProduct }) {
    return (
        <div>
            <h1>Choose product:</h1>
            <ul>
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
        </div>
    );
}

export default ProductList;