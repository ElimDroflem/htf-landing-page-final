// ContactForm.js
import React, { useState } from "react";
import "./contactForm.css";
import "../style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="screen-background">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form__group">
          <label htmlFor="name" className="visually-hidden">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Name"
          />

          <label htmlFor="email" className="visually-hidden">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input"
            placeholder="Email"
          />
        </div>

        <label htmlFor="message" className="visually-hidden">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          placeholder="Message"
        />

        <button type="submit" className="contact-form__button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
