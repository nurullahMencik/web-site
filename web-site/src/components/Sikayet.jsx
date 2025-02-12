import React, { useState } from "react";
import "../css/istekSikayet.css"; // Yeni CSS dosyanızı buraya ekleyin

function IstekSikayet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "İstek",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form başarıyla gönderildi:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", email: "", type: "İstek", message: "" });
  };

  return (
    <div className="istek-sikayet-wrapper">
      <div className="istek-sikayet-container">
        <h1>İSTEK VE ŞİKAYET</h1>
        <form onSubmit={handleSubmit}>
          <div className="istek-sikayet-group">
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
          <div className="istek-sikayet-group">
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
          <div className="istek-sikayet-group">
            <label htmlFor="type">Mesaj Türü:</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="İstek">İstek</option>
              <option value="Şikayet">Şikayet</option>
            </select>
          </div>
          <div className="istek-sikayet-group">
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
          <button className="istek-sikayet-button" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default IstekSikayet;
