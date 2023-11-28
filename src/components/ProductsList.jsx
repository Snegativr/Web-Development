import React from 'react';

function ProductList({ products, onProductCheck }) {
    return (
        <div>
            <h2>Список товарів</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <input
                            type="checkbox"
                            checked={product.isChecked}
                            onChange={() => onProductCheck(product.id)}
                        />
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;