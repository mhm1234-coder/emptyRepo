export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Contact Us
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Our supporting team is available to assist you with any questions or concerns you may have.
      </p>

      {/* FORM CARD */}
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md space-y-4">

        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red  -500"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* MESSAGE */}
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Send
        </button>

      </form>

    </div>
  );
}