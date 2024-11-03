import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sylvestersila6@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Message:
${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const inputClasses = (fieldName) =>
    `w-full p-3 rounded-lg bg-gray-800/50 border-2 ${
      focusedField === fieldName
        ? "border-blue-500 shadow-lg shadow-blue-500/20"
        : "border-gray-700 "
    } 
    focus:outline-none  transition-all duration-300 backdrop-blur-sm mt-3`;

  const formFields = [
    {
      name: "name",
      type: "text",
      label: "Your Name",
      icon: "👤",
      className: "",
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone Number",
      icon: "📱",
      className: "",
    },
    {
      name: "subject",
      type: "text",
      label: "Subject",
      icon: "📝",
      className: "md:col-span-2",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[87vw] max-w-[600px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br mb-8 border border-gray-900 from-gray-900 rounded-xl via-gray-900 p-7
          w-full space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group pt-3 ${field.className}`}
              >
                <label
                  htmlFor={field.name}
                  className="absolute top-0 left-3 px-2 bg-gray-900 text-sm text-gray-400 
                  group-focus-within:text-purple-400 transition-colors duration-200 z-10"
                >
                  {field.icon} {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses(field.name)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative group pt-3"
          >
            <label
              htmlFor="message"
              className="absolute top-0 left-3 px-2 bg-gray-900 text-sm text-gray-400 
              group-focus-within:text-purple-400 transition-colors duration-200 z-10"
            >
              💭 Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows="4"
              className={inputClasses("message")}
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500  text-white font-bold py-3 px-6 rounded-lg transition-all duration-300
             mt-4"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}
