import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  const handleBuyNow = () => {
    navigate('/success');
  };

  const handleCloseCart = () => {
    navigate(-1);
  };

  return (
    <div className="cart-page" style={{ padding: 20 }}>
      <button onClick={handleCloseCart} style={{ float: 'right', fontSize: 20, cursor: 'pointer' }}>
        ✕
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ display: 'flex', marginBottom: 15, border: '1px solid #ddd', padding: 10, borderRadius: 5 }}>
            <img src={item.img} alt={item.title} style={{ width: 80, height: 80, marginRight: 15 }} />
            <div style={{ flex: 1 }}>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ marginRight: 10 }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ marginLeft: 10 }}>+</button>
              </div>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer', padding: '5px 10px', height: 'fit-content' }}>
              Remove
            </button>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Total Price: ₹{totalPrice}</h3>
          <button onClick={handleBuyNow} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
