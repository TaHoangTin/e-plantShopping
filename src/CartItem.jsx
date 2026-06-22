import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { ShoppingCart, Sprout, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

function CartItem({ onNavigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 1. Total number of plants in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 2. Total cost of all items in the cart
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert('Checkout feature is Coming Soon! Thank you for your patience.');
  };

  return (
    <div className="cart-page" style={{ width: '100%' }}>
      {/* Shared Navbar */}
      <header className="header">
        <div className="header-container">
          <div className="header-logo" onClick={() => onNavigate('landing')} id="nav-logo" style={{ cursor: 'pointer' }}>
            <Sprout size={32} />
            <div>
              <strong>Paradise Nursery</strong>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginTop: '-2px' }}>
                Greenery Oasis
              </div>
            </div>
          </div>
          
          <nav className="header-nav">
            <span className="nav-link" onClick={() => onNavigate('landing')} id="nav-link-home" style={{ cursor: 'pointer' }}>Home</span>
            <span className="nav-link" onClick={() => onNavigate('products')} id="nav-link-plants" style={{ cursor: 'pointer' }}>Plants</span>
            <span className="nav-link active" onClick={() => onNavigate('cart')} id="nav-link-cart-text" style={{ cursor: 'pointer' }}>Cart</span>
            <div 
              className="cart-icon-btn" 
              onClick={() => onNavigate('cart')}
              id="nav-cart-btn"
              title="View Shopping Cart"
              style={{ cursor: 'pointer' }}
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="cart-title-area">
          <h2>Your Plant Cart</h2>
          <p>Review your botanical selections and adjust quantities before checking out.</p>
        </div>

        <div className="cart-layout">
          {/* Left Panel: Items List */}
          <div className="cart-items-panel">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">
                  <ShoppingBag size={64} />
                </div>
                <h3>Your Cart is Empty</h3>
                <p>It looks like you haven't added any green companions to your shopping cart yet.</p>
                <button 
                  className="btn-primary"
                  onClick={() => onNavigate('products')}
                  id="cart-empty-shop-btn"
                >
                  Browse Houseplants
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-left">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <div className="cart-item-price-tag">
                        Unit Price: <span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cart-item-controls">
                    {/* Quantity Picker */}
                    <div className="quantity-picker">
                      <button 
                        className="qty-btn"
                        onClick={() => handleDecrement(item)}
                        title="Decrease Quantity"
                        id={`qty-dec-${item.id}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => handleIncrement(item)}
                        title="Increase Quantity"
                        id={`qty-inc-${item.id}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    {/* Total Cost for this Plant Type */}
                    <div className="cart-item-total">
                      Subtotal: ${item.price * item.quantity}
                    </div>
                    
                    {/* Delete Action */}
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(item.id)}
                      title="Remove Plant"
                      id={`delete-btn-${item.id}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Panel: Order Summary */}
          {cartItems.length > 0 && (
            <div className="cart-summary-panel">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Total Houseplants</span>
                  <span>{totalItems} plants</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span style={{ color: 'var(--primary)', fontWeight: '600' }}>FREE</span>
                </div>
                <div className="summary-row total">
                  <span>Grand Total:</span>
                  <span>${totalCost}</span>
                </div>
                <div className="summary-actions">
                  <button 
                    className="btn-checkout"
                    onClick={handleCheckout}
                    id="checkout-btn"
                  >
                    Secure Checkout (Coming Soon)
                  </button>
                  <button 
                    className="btn-continue-shopping"
                    onClick={() => onNavigate('products')}
                    id="continue-shopping-btn"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CartItem;
