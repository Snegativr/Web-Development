import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'antd';
import { useProductContext } from '../context/ProductContext';
import ProductPage from './ProductPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'antd/dist/antd';
import styles from '../CSS/Products.module.css';

const { Meta } = Card;

const Products = () => {
    const {
        selectedProduct,
        handleProductSelect,
        products,
        removeProduct,
        addProduct,
    } = useProductContext();

    const [addedProduct, setAddedProduct] = useState(null);

    const addNewProduct = () => {
        const name = prompt('Enter product name');
        const description = prompt('Enter product description');

        if (name && description) {
            const newProduct = { id: products.length + 1, name, description };
            addProduct(newProduct);
            setAddedProduct(null);

        }
    };

    const getColumnSpan = () => {
        const itemCount = products.length + (addedProduct ? 1 : 0);
        if (itemCount >= 4) {
            return 6;
        }
        return 24 / itemCount;
    };

    return (
        <div className={styles.container}>
            <h1>Choose a Product:</h1>

            <TransitionGroup className="list">
                <Row gutter={[16, 16]}>
                    {products.map((product) => (
                        <CSSTransition key={product.id} timeout={500} classNames="item">
                            <Col xs={24} sm={getColumnSpan()} key={product.id}>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={<img alt={product.name} src="https://via.placeholder.com/150" />}
                                    onClick={() => handleProductSelect(product.id)}
                                >
                                    <Meta title={product.name} description={product.description} />
                                </Card>
                            </Col>
                        </CSSTransition>
                    ))}
                    {addedProduct && (
                        <CSSTransition key={addedProduct.id} timeout={500} classNames="item">
                            <Col xs={24} sm={getColumnSpan()} key={addedProduct.id}>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={<img alt={addedProduct.name} src="https://via.placeholder.com/150" />}
                                    onClick={() => handleProductSelect(addedProduct.id)}
                                >
                                    <Meta title={addedProduct.name} description={addedProduct.description} />
                                </Card>
                            </Col>
                        </CSSTransition>
                    )}
                </Row>
            </TransitionGroup>

            {selectedProduct && typeof selectedProduct === 'object' && (
                <div>
                    <ProductPage product={selectedProduct} />
                    <Button danger size="small" onClick={() => removeProduct(selectedProduct.id)}>
                        Remove Product
                    </Button>
                </div>
            )}

            <Button size="small" onClick={addNewProduct} style={{ marginTop: '16px' }}>
                Add Product
            </Button>
        </div>
    );
};

export default Products;
