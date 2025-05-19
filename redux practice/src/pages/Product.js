import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const dummyProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  title: `Product ${index + 1}`,
  price: 100 + index * 50,
  features: `This is feature set of Product ${index + 1}`,
}));

const styles = {
  page: { padding: 20 },
  card: {
    border: '1px solid #ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 10,
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div style={styles.page}>
      <h2>Product List</h2>
      {dummyProducts.map((product) => (
        <div key={product.id} style={styles.card}>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Features:</strong> {product.features}</p>
          <button style={styles.button} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
