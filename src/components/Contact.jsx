function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle,_#ffffff,_#e0e0e0,_#c0c0c0)] px-4 sm:px-6 md:px-8">
      <div className="bg-[radial-gradient(circle,_#2a2a2a,_#1f1f1f,_#000000)] px-6 sm:px-8 py-8 sm:py-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-lg w-full max-w-[1000px] text-center">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] uppercase font-bold mb-6 sm:mb-8 text-center text-[#fff]">
          Contact Me
        </h2>
        <p className="mb-6 sm:mb-10 text-gray-300 text-sm sm:text-base md:text-lg ">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form className="flex flex-col space-y-4 sm:space-y-6 text-left text-gray-300">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              required
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Enter Your Message..."
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="hero-link wiggle-on-hover !text-[1.25rem] self-end mt-2 sm:mt-4"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
