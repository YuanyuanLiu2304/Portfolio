import handshake from "../assets/handshake.png";

const Contact = () => {
  const handleSubmit = () => {
    window.alert("Thank you for reaching out to me!");
  };

  return (
    <div className="bg-emerald-100 px-10 py-20 min-h-[90vh] grid justify-center items-center">
      <div className="grid justify-center items-center">
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center">
            <span className="circle-fill"></span>
            <span className="text-xl">Contact me</span>
          </div>
          <div className="text-5xl my-8 flex place-content-center">
            <h1>Let's create something amazing together</h1>
            <img src={handshake} alt="handshake" className="handshake" />
          </div>
        </div>

        <form
          name="contactForm"
          method="get"
          action="https://portfolio-yuanyuanliu.netlify.app/contact"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            id="message"
            required
          />
          <button type="submit" className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
