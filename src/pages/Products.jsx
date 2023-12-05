import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { useProductContext } from '../context/ProductContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'antd/dist/antd';
import '../CSS/Products.css';
import { Formik, Form } from "formik";
import CustomInput from '../formikElem/CustomInput';
import * as Yup from "yup";
const { Meta } = Card;

const Products = () => {
    const {
        products,
        removeProduct,
        addProduct,
    } = useProductContext();

    const ProductAddSchema = Yup.object().shape({
        name: Yup.string().min(3, "Product name must be 3 chars or longer").required("Required"),
        description: Yup.string().max(100, "Product description must be 100 chars or shorter").required("Required"),
    });
    const [addedProduct, setAddedProduct] = useState(null);

    const addNewProduct = (values) => {
        console.log('Product values: ', values);
        const newProduct = { id: products.length + 1, ...values };
        console.log('Created product: ', newProduct);
        addProduct(newProduct);
        setAddedProduct(null);
    };

    const getColumnSpan = () => {
        const itemCount = products.length + (addedProduct ? 1 : 0);
        if (itemCount >= 4) {
            return 6;
        }
        return 24 / itemCount;
    };

    return (
        <div className={"container"}>
            <h1>Choose a Product:</h1>

            <TransitionGroup className="list">
                <Row gutter={[16, 16]}>
                    {products.map((product) => (
                        <CSSTransition key={product.id} timeout={5000} classNames="item">
                            <Col xs={24} sm={getColumnSpan()} key={product.id}>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={<img alt={product.name} src="https://via.placeholder.com/150" />}
                                    onClick={() => removeProduct(product.id)}
                                >
                                    <div>
                                        <Meta title={product.name} description={product.description} />
                                    </div>
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
                                    onClick={() => removeProduct(addedProduct.id)}
                                >
                                    <Meta title={addedProduct.name} description={addedProduct.description} />
                                </Card>
                            </Col>
                        </CSSTransition>
                    )}
                </Row>
            </TransitionGroup>

            <Formik
                initialValues={{
                    name: "",
                    description: "",
                }}
                validationSchema={ProductAddSchema}
                onSubmit={addNewProduct}
            >
                <Form className="registration-form">
                    <CustomInput label="Name:" type="text" id="name" name="name" />
                    <CustomInput label="Description:" type="text" id="description" name="description" />

                    <div className="form-group">
                        <button type="submit">Add new Product</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Products;
