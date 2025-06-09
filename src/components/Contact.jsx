import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatusMessage("Message sent successfully! 🎉");
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatusMessage("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-[url('/assets/background.jpg')] bg-cover bg-center">
      {/* Blur overlay behind content */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md -z-10" />

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-lg w-full max-w-[1000px] px-6 sm:px-8 py-8 sm:py-10 text-center text-gray-300 z-30">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] uppercase font-bold mb-6 sm:mb-8 text-center text-white">
          Contact Me
        </h2>
        <p className="mb-6 sm:mb-10 text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem]">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 sm:space-y-6 text-left"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              name="user_name"
              required
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-transparent"
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
              name="user_email"
              required
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-transparent"
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
              name="message"
              rows="5"
              required
              placeholder="Enter Your Message..."
              className="border border-gray-700 text-gray-300 rounded px-3 py-2 sm:px-4 sm:py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300 bg-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-btn self-end mt-2 sm:mt-4 flex items-center justify-center relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? <span className="email-loader" /> : "SUBMIT"}
          </button>
        </form>

        {statusMessage && (
          <p
            className={`mt-4 font-semibold ${
              statusMessage.includes("successfully")
                ? "text-green-400 text-l md:text-xl"
                : "text-red-500 text-l md:text-xl"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
