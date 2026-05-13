export default function Contact() {

  return (
    <div className="page">

      <h2>Contact Us</h2>
      <p>Our supporting team is available to assist you with any questions or 
        concerns you may have.</p>
      <form>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button>Send</button>

      </form>

    </div>
  );
}