function ProductPage({ product, onCommentAdd, exchangeRate, convertPriceToUSD }) {

    if (!product) {
        return <div>Product not chosen</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductPage;