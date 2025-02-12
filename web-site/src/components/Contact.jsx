import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form başarıyla gönderildi:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", email: "", type: "İstek", message: "" }); // Formu sıfırla
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>İLETİŞİM</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınızı ve Soyadınızı Giriniz"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta Adresinizi Giriniz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınızı buraya yazınız..."
              required
            ></textarea>
          </div>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
