import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_su65vpu", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target, // Automatically handles form data
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setMessage("Thank you for reaching out! I'll get back to you soon.");
          setFormData({
            name: "",
            email: "",
            reason: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          setMessage("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 py-12 px-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-purple-600">
          Contact Me
        </h2>
        <p className="text-lg text-center text-gray-600">
          Feel free to reach out if you have any questions or just want to
          connect.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Reason Field */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Why do you want to connect?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Let me know your reason for connecting..."
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Response Message */}
        {message && (
          <div className="text-center text-lg font-semibold text-gray-800 mt-4">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
