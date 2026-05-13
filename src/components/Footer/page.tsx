export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h3>Pharmacy Store</h3>
          <p>Your trusted online pharmacy platform</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p><a href="/">Home</a></p>
          <p><a href="/products">Products</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/contact">Contact</a></p>

        </div>

        <div>
          <h3>Support</h3>
          <p>24/7 Customer Care</p>
          <p>support@pharmacystore.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pharmacy Store. All rights reserved.</p>
      </div>

    </footer>
  );
}