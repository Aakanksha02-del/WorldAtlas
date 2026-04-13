import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className={`contact-container ${sent ? "smoke-active" : ""} `}>
      <form className="contact-box" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">SEND</button>

        {sent && <p className="success">✅ Message Sent Successfully</p>}
      </form>
    </div>
  );
};

export default Contact;