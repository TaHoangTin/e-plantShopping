import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { ShoppingCart, Sprout, Check } from 'lucide-react';

const plantProducts = [
  // Category 1: Air Purifying Plants (6 plants)
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 15,
    category: 'Air Purifying Plants',
    description: 'Produces oxygen at night, purifies benzene and formaldehyde, and is extremely resilient to neglect.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller'
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    price: 12,
    category: 'Air Purifying Plants',
    description: 'Beautiful cascading leaves that filter formaldehyde and carbon monoxide. Completely pet-friendly!',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400',
    tag: 'Pet Friendly'
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    price: 16,
    category: 'Air Purifying Plants',
    description: 'Features elegant white blooms. Excellent at neutralizing indoor gaseous toxins and humidifying dry air.',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=400',
    tag: 'Popular'
  },
  {
    id: 'english-ivy',
    name: 'English Ivy',
    price: 14,
    category: 'Air Purifying Plants',
    description: 'Highly effective at clearing airborne mold and impurities. Easy to grow climbing ivy.',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400',
    tag: 'Classic'
  },
  {
    id: 'golden-pothos',
    name: 'Golden Pothos',
    price: 13,
    category: 'Air Purifying Plants',
    description: 'Known for its beautiful heart-shaped leaves and ability to absorb gaseous chemicals and purify air.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=400',
    tag: 'Tough'
  },
  {
    id: 'chinese-evergreen',
    name: 'Chinese Evergreen',
    price: 19,
    category: 'Air Purifying Plants',
    description: 'A durable plant that filters indoor air toxins while tolerating low light and dry atmosphere.',
    image: 'https://images.unsplash.com/photo-1618751433367-cd34c740263f?auto=format&fit=crop&q=80&w=400',
    tag: 'Variegated'
  },

  // Category 2: Low Maintenance (6 plants)
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    price: 18,
    category: 'Low Maintenance',
    description: 'Thrives in almost total darkness and requires watering only once a month. The ultimate beginner plant.',
    image: 'https://images.unsplash.com/photo-1632207191173-e38eb8754117?auto=format&fit=crop&q=80&w=400',
    tag: 'Hardy'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    price: 14,
    category: 'Low Maintenance',
    description: 'Succulent leaves packed with soothing, healing gel. Requires bright indirect light and minimal water.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=400',
    tag: 'Healing'
  },
  {
    id: 'cast-iron',
    name: 'Cast Iron Plant',
    price: 20,
    category: 'Low Maintenance',
    description: 'An indestructible plant that tolerates deep shade, drafts, and severe neglect.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400',
    tag: 'Indestructible'
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    price: 15,
    category: 'Low Maintenance',
    description: 'Beautiful miniature tree-like appearance with thick, fleshy leaves. Symbol of good luck.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400',
    tag: 'Lucky'
  },
  {
    id: 'ponytail-palm',
    name: 'Ponytail Palm',
    price: 22,
    category: 'Low Maintenance',
    description: 'Features a bulbous trunk that stores water, making it extremely drought tolerant. Elegant curly leaves.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400',
    tag: 'Unique'
  },
  {
    id: 'boston-fern',
    name: 'Boston Fern',
    price: 18,
    category: 'Low Maintenance',
    description: 'Feathery, arching green fronds that thrive in high humidity and medium indirect light.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400',
    tag: 'Lush'
  },

  // Category 3: Dramatic Foliage (6 plants)
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    price: 25,
    category: 'Dramatic Foliage',
    description: 'Iconic swiss-cheese split leaves that grow rapidly, bringing a bold tropical aesthetic to any room.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400',
    tag: 'Trending'
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    price: 32,
    category: 'Dramatic Foliage',
    description: 'Tall, majestic stem with large, glossy, violin-shaped leaves. An absolute statement piece.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=400',
    tag: 'Statement'
  },
  {
    id: 'calathea',
    name: 'Calathea Orbifolia',
    price: 22,
    category: 'Dramatic Foliage',
    description: 'Fascinating oversized round leaves decorated with delicate metallic-silver stripes. Enjoys shade.',
    image: 'https://images.unsplash.com/photo-1618751433367-cd34c740263f?auto=format&fit=crop&q=80&w=400',
    tag: 'Exotic'
  },
  {
    id: 'bird-of-paradise',
    name: 'Bird of Paradise',
    price: 35,
    category: 'Dramatic Foliage',
    description: 'Large banana-like leaves that fan out gracefully. Creates an immediate focal point in bright rooms.',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=400',
    tag: 'Giant'
  },
  {
    id: 'elephant-ear',
    name: 'Elephant Ear',
    price: 26,
    category: 'Dramatic Foliage',
    description: 'Massive, heart-shaped leaves with prominent veins. Outstanding texture and presence.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400',
    tag: 'Dramatic'
  },
  {
    id: 'rubber-tree',
    name: 'Burgundy Rubber Tree',
    price: 24,
    category: 'Dramatic Foliage',
    description: 'Striking dark burgundy-black glossy leaves. Very robust, upright tree structure.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400',
    tag: 'Bold'
  }
];

function ProductList({ onNavigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items dynamically
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      image: plant.image,
      price: plant.price
    }));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  // Group plants by category
  const categories = [...new Set(plantProducts.map(p => p.category))].map(catName => ({
    name: catName,
    products: plantProducts.filter(p => p.category === catName)
  }));

  return (
    <div className="product-list-page" style={{ width: '100%' }}>
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
            <span className="nav-link active" onClick={() => onNavigate('products')} id="nav-link-plants" style={{ cursor: 'pointer' }}>Plants</span>
            <span className="nav-link" onClick={() => onNavigate('cart')} id="nav-link-cart-text" style={{ cursor: 'pointer' }}>Cart</span>
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
        <div className="shop-hero">
          <h2>Find Your Perfect Plant Match</h2>
          <p>Breathe life into your indoor space with our carefully selected varieties, guaranteed to brighten any room.</p>
        </div>

        {categories.map((category) => (
          <section key={category.name} className="category-section" style={{ width: '100%', maxWidth: 'var(--max-width)', margin: '0 auto 4rem auto' }}>
            <div className="category-title-container">
              <h3 className="category-title">{category.name}</h3>
              <span className="category-badge">{category.products.length} Plants</span>
            </div>
            
            <div className="product-grid">
              {category.products.map((plant) => {
                const inCart = isPlantInCart(plant.id);
                return (
                  <article key={plant.id} className="plant-card">
                    {plant.tag && <span className="plant-card-tag">{plant.tag}</span>}
                    <div className="plant-image-container">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="plant-image" 
                        loading="lazy"
                      />
                    </div>
                    <div className="plant-details">
                      <h4 className="plant-name">{plant.name}</h4>
                      <p className="plant-description">{plant.description}</p>
                      <div className="plant-footer">
                        <span className="plant-price">${plant.price}</span>
                        <button 
                          className={`btn-add-to-cart ${inCart ? 'in-cart' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={inCart}
                          id={`add-to-cart-${plant.id}`}
                        >
                          {inCart ? (
                            <>
                              <Check size={16} />
                              In Cart
                            </>
                          ) : (
                            'Add to Cart'
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
