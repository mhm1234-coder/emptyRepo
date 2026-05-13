export default function Services() {

  return (
    <div className="page">

      <h2>Our Services</h2>
<section className="banner">
          <p>We offer a range of services to meet your healthcare needs</p>
        </section>
        
      <div className="card-container">

        <div className="card">
          <h3>24/7 Pharmacy</h3>
          <p>Order medicines anytime, anywhere</p>
          <a href="/home" className="link-button">Shop Now</a>
        </div>

        <div className="card">
          <h3>Home Delivery</h3>
          <p>Get your medicines delivered to your doorstep</p>
          <a href="/cart" className="link-button">Shop Now</a>
        </div>

        <div className="card">
          <h3>Online Consultation</h3>
          <p> Please consult us for any health-related queries</p>
          <a href="/contact" className="link-button">Contact Us</a>


        </div>

      </div>

    </div>
  );
}