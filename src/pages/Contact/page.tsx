export default function Contact() {
  return (
    <div className="page">

      <h1>Contact Us</h1>

      <p><b>Email:</b> pharmacy@gmail.com</p>
      <p><b>Phone:</b> 0300-1234567</p>
      <p><b>Address:</b> 123 Pharmacy Street</p>
      <p><b>Working Hours:</b> 9 AM - 9 PM</p>

      <form>
        <h2>Send Message</h2>

        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />

        <textarea placeholder="Message" required />

        <button type="submit">Send</button>
      </form>

    </div>
  );
}