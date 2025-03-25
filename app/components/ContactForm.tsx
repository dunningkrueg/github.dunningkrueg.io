"use client"

import { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      console.log("Sending email with:", {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      });
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent!' }
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setStatus((prevStatus) => ({
          ...prevStatus,
          submitted: false,
          info: { error: false, msg: null }
        }));
      }, 3000);
      
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Error occurred. Message not sent.' }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-700 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-700 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message"
          name="message" 
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-dark-700 border border-white/10 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition"
        ></textarea>
      </div>
      
      {status.info.msg && (
        <div className={`p-4 rounded-lg ${status.info.error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
          {status.info.msg}
        </div>
      )}
      
      <button 
        type="submit"
        disabled={status.submitting}
        className="group relative w-full py-3 px-6 rounded-lg overflow-hidden disabled:opacity-70"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700"></span>
        <span className="relative z-10 flex items-center justify-center text-white font-medium">
          {status.submitting ? 'Sending...' : 'Send Message'}
          <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${status.submitting ? '' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </button>
    </form>
  );
} 