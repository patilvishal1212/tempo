import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Submit Handler (Backend Post)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: "" });

    try {
      // इथे तुमच्या Backend API चा URL टाका (उदा. http://localhost:5000/api/contact)
      const response = await axios.post(
        "https://forms-backend-n4rt.onrender.com/api/contact/",
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        setStatus({
          submitting: false,
          success: true,
          message: "successfully!",
        });
        // Form Clear करणे
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          address: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        message: error.response?.data?.message || "error please try again",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white p-4 sm:p-8 rounded-2xl shadow-lg 
                  overflow-y-auto max-h-screen">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        {/* Status Message */}
        {status.message && (
          <div
            className={`p-3 sm:p-4 mb-4 text-sm rounded-lg ${
              status.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="FULL NAME"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="EMAIL"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="PHONE NUMBER"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="ADDRESS"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="MESSAGE"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 
             rounded-lg transition duration-200 disabled:bg-blue-400 sticky bottom-0"
          >
            {status.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
