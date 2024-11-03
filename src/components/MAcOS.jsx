import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MacOSContact() {
  // ... previous state and handlers remain the same ...

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[87vw] max-w-[600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
          <p className="text-gray-400 italic">
            "Courage is not the absence of fear, but the triumph over it."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden"
        >
          <div className="border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-6 bg-gradient-to-b from-blue-500/10 to-green-500/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="text-gray-400 mb-6 text-sm">
                <span className="text-green-400">$</span> Every challenge is an opportunity to demonstrate courage...
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`relative group pt-3 ${field.className}`}
                    >
                      <label
                        htmlFor={field.name}
                        className="absolute top-0 left-3 px-2 bg-gray-900 text-sm text-gray-400 
                        group-focus-within:text-green-400 transition-colors duration-200 z-10"
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
                        className={`${inputClasses(field.name)} placeholder-gray-600`}
                        placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative group pt-3"
                >
                  <label
                    htmlFor="message"
                    className="absolute top-0 left-3 px-2 bg-gray-900 text-sm text-gray-400 
                    group-focus-within:text-green-400 transition-colors duration-200 z-10"
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
                    placeholder="Share your thoughts with courage..."
                    className={inputClasses("message")}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold 
                  py-3 px-6 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-blue-600
                  shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                >
                  Send Message with Confidence
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-sm text-gray-500"
        >
          Trust in the process. Every message is a step forward.
        </motion.div>
      </div>
    </div>
  );
}