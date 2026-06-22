import React, { useState } from 'react';
import { Sprout, ArrowRight } from 'lucide-react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  // Navigation State: 'landing' (Home), 'products' (Plants), 'cart' (Cart)
  const [view, setView] = useState('landing');

  return (
    <div className="app-container" style={{ width: '100%' }}>
      {/* 1. LANDING PAGE (Home) */}
      {view === 'landing' && (
        <main className="landing-container">
          <div className="landing-card">
            <div className="landing-title-area">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Sprout size={60} color="var(--accent-gold)" />
              </div>
              <h1 className="landing-logo">Paradise <span>Nursery</span></h1>
              <p className="landing-tagline">Where Greenery Meets Serenity</p>
              <div className="landing-divider"></div>
            </div>
            
            {/* AboutUs component containing company details */}
            <AboutUs />
            
            <button 
              className="btn-get-started" 
              onClick={() => setView('products')}
              id="get-started-btn"
              style={{ marginTop: '1.5rem' }}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </main>
      )}

      {/* 2. PRODUCT LISTING PAGE (Plants) */}
      {view === 'products' && (
        <ProductList onNavigate={setView} />
      )}

      {/* 3. SHOPPING CART PAGE (Cart) */}
      {view === 'cart' && (
        <CartItem onNavigate={setView} />
      )}
    </div>
  );
}

export default App;
