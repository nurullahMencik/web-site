import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-content">
        <h2>Bizim Hikayemiz</h2>
        <p>
          2023 yılında kurulan şirketimiz, kullanıcıların hayatını kolaylaştıran
          yenilikçi çözümler geliştirmeyi hedefliyor. Yazılım geliştirme, web
          tasarımı ve dijital pazarlama alanlarında geniş bir deneyime sahibiz.
        </p>

        <h2>Vizyonumuz</h2>
        <p>
          Teknoloji ve müşteri odaklı yaklaşımımızla, dijital dünyada daha
          verimli ve erişilebilir çözümler sunmayı amaçlıyoruz.
        </p>

        <h2>Misyonumuz</h2>
        <p>
          Her müşterimize özel çözümler sunarak, onların dijital dünyadaki
          başarılarını en üst düzeye çıkarmak.
        </p>

        <div className="about-highlight">
          <p>
            <strong>“İnovasyon, sürdürülebilir büyümenin anahtarıdır.”</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
