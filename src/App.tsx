

import './index.css';

import { useState } from 'react';
import panadol from './assets/panadoll.png';
import syrup from './assets/syrup.png';
import vitamins from './assets/vitamins.png';
import babycare from './assets/babycare.png';


function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    { id: 1, name: 'Panadol',   price: 50,  img: panadol,  category: 'tablets'   },
    { id: 2, name: 'Syrup',     price: 120, img: syrup,    category: 'syrups'    },
    { id: 3, name: 'Vitamins',  price: 200, img: vitamins, category: 'vitamins'  },
    { id: 4, name: 'Baby Care', price: 500, img: babycare, category: 'baby-care' },
  ];

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <nav>
        <a href="#">My Pharmacy Store</a>
        <ul>
          <li><a href="#" onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#" onClick={() => setCurrentPage('services')}>Services</a></li>
          <li><a href="#" onClick={() => setCurrentPage('contact')}>Contact</a></li>
          <li><a href="#" onClick={() => setCurrentPage('signup')}>Signup</a></li>
        </ul>
      </nav>

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <div className="page">
          <h2>Categories</h2>
          <div className="cat-box" onClick={() => setActiveCategory('all')}>All</div>
          <div className="cat-box" onClick={() => setActiveCategory('tablets')}>Tablets</div>
          <div className="cat-box" onClick={() => setActiveCategory('syrups')}>Syrups</div>
          <div className="cat-box" onClick={() => setActiveCategory('vitamins')}>Vitamins</div>
          <div className="cat-box" onClick={() => setActiveCategory('baby-care')}>Baby Care</div>

          <h2>Our Products</h2>
          <div className="card-container">
            {filtered.map(product => (
              <div className="card" key={product.id}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Rs {product.price}</p>
                <button onClick={() => alert(`${product.name} added to cart!`)}>
                  Add to Cart
                </button>
                
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SERVICES PAGE */}
      {currentPage === 'services' && (
        <div className="page">
          <h2>Our Services</h2>
          <p>We provide quality medicines and healthcare products.</p>
          <div className="card-container">
            <div className="card"><h3>Home Delivery</h3><p>Get medicines at your doorstep</p></div>
            <div className="card"><h3>Online Prescription</h3><p>Upload and get medicines</p></div>
            <div className="card"><h3>24/7 Support</h3><p>Always here to help you</p></div>
          </div>
        </div>
      )}

      {/* CONTACT PAGE */}
      {currentPage === 'contact' && (
        <div className="page">
          <h2>Contact Us</h2>
          <div className="form-container">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={4}></textarea>
              <button type="button">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* SIGNUP PAGE */}
      {currentPage === 'signup' && (
        <div className="page">
          <h2>Signup</h2>
          <div className="form-container">
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Signup</button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <p>Contact: pharmacy@gmail.com</p>
        <p>Phone: 0300-1234567</p>
      </footer>
    </>
  );
}

export default App;