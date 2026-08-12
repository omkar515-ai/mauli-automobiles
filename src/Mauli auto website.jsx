import "./App.css";
import Navbar from "./components/Navbar";

import hondaLogo from "./assets/logo/honda.webp";
import heroLogo from "./assets/logo/hero.png";

import img17 from "./assets/gallery/17.jpeg";
import img2 from "./assets/gallery/2.webp";
import img3 from "./assets/gallery/3.webp";
import img4 from "./assets/gallery/4.webp";
import img5 from "./assets/gallery/5.webp";
import img6 from "./assets/gallery/6.webp";
import img7 from "./assets/gallery/7.webp";
import img9 from "./assets/gallery/9.webp";

import img10 from "./assets/gallery/10.jpeg";
import img12 from "./assets/gallery/12.jpeg";
import img13 from "./assets/gallery/13.jpeg";
import img1 from "./assets/gallery/1.webp";
import img18 from "./assets/gallery/18.jpeg";
import img19 from "./assets/gallery/19.jpeg";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="overlay">
          <h3>HONDA • HERO</h3>
          <h1>MAULI AUTOMOBILES</h1>
          <p>Genuine Honda & Hero Two-Wheeler Spare Parts</p>
          <a href="#about">Explore</a>
        </div>
        
      </section>

     <section id="about" className="about">
  <h2>About Us</h2>

  <p>
    Welcome to <strong>Mauli Automobiles</strong>, your trusted destination
    for genuine Honda and Hero two-wheeler spare parts.
  </p>

  <p>
    We provide high-quality original spare parts, engine parts, brake parts,
    clutch plates, cables, filters, electrical parts, and accessories for
    Honda and Hero motorcycles and scooters.
  </p>

  <p>
    Our goal is to provide customers with genuine products, reasonable prices,
    and excellent service.
  </p>
</section>



<section id="brands" className="brands">

  <h2>Our Brands</h2>

  <p className="brands-subtitle">
    We are an authorized dealer of genuine Honda and Hero two-wheeler spare parts.
  </p>

  <div className="brand-grid">

    {/* Honda */}

    <div className="brand-card">

      <div className="brand-left">
        <img src={hondaLogo} alt="Honda" className="brand-logo" />
        <h3>Honda</h3>
      </div>

      <div className="brand-right">
        <p>
          Official Genuine <br />
          Spare Parts
        </p>

        <span className="brand-badge">
          ✓ 100% Genuine Products
        </span>
      </div>

    </div>

    {/* Hero */}

    <div className="brand-card">

      <div className="brand-left">
        <img src={heroLogo} alt="Hero" className="brand-logo" />
        <h3>Hero</h3>
      </div>

      <div className="brand-right">
        <p>
          Official Genuine <br />
          Spare Parts
        </p>

        <span className="brand-badge">
          ✓ 100% Genuine Products
        </span>
      </div>

    </div>

  </div>

</section>

<section id="products" className="products">

  <h2>Our Products</h2>

  <p className="products-subtitle">
    We provide a complete range of genuine Honda & Hero two-wheeler spare parts.
  </p>

  <div className="products-grid">

    <div className="product-card">
      <span className="product-icon">🔧</span>
      <h3>Engine Parts</h3>
      <p>Pistons, Rings, Valves, Bearings & Gaskets</p>
      <a href="#">View Products →</a>
    </div>

    <div className="product-card">
      <span className="product-icon">🛞</span>
      <h3>Brake Parts</h3>
      <p>Brake Shoes, Brake Pads & Brake Cables</p>
      <a href="#">View Products →</a>
    </div>

    <div className="product-card">
      <span className="product-icon">⚙️</span>
      <h3>Clutch Parts</h3>
      <p>Clutch Plates, Clutch Cables & Springs</p>
      <a href="#">View Products →</a>
    </div>

    <div className="product-card">
      <span className="product-icon">💡</span>
      <h3>Electrical Parts</h3>
      <p>Horns, Bulbs, Switches, Batteries & Wiring</p>
      <a href="#">View Products →</a>
    </div>

    <div className="product-card">
      <span className="product-icon">🛢️</span>
      <h3>Oils & Filters</h3>
      <p>Engine Oil, Air Filter & Oil Filter</p>
      <a href="#">View Products →</a>
    </div>

    <div className="product-card">
      <span className="product-icon">🏍️</span>
      <h3>Accessories</h3>
      <p>Mirrors, Grips, Locks, Side Boxes & More</p>
      <a href="#">View Products →</a>
    </div>

  </div>

  <div className="products-btn">
    <a href="#contact">Contact for All Spare Parts →</a>
  </div>

</section>

<section id="gallery" className="gallery">

  <h2>Our Gallery</h2>

  <p className="gallery-subtitle">
    Explore our showroom, genuine Honda & Hero spare parts collection,
    and the quality service we proudly provide to every customer.
  </p>

  <div className="gallery-grid">

    <div className="gallery-item"><img src={img17} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img2} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img3} alt="Gallery" /></div>

    <div className="gallery-item"><img src={img4} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img5} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img6} alt="Gallery" /></div>

    <div className="gallery-item"><img src={img7} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img9} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img10} alt="Gallery" /></div>

    <div className="gallery-item"><img src={img12} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img13} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img1} alt="Gallery" /></div>

    <div className="gallery-item"><img src={img18} alt="Gallery" /></div>
    <div className="gallery-item"><img src={img19} alt="Gallery" /></div>

  </div>

</section>
<section id="contact" className="contact">

  <h2>Contact Us</h2>

  <p className="contact-subtitle">
    Need genuine Honda or Hero spare parts? Visit our shop or contact us anytime.
  </p>

  <div className="contact-container">

    <div className="contact-info">

      <div className="contact-box">
        <h3>📍 Address</h3>
        <p>
          Mauli Automobiles<br/>
          Rajesh Shahri Complex,<br/>
          Mondha Road,<br/>
          Ambajogai, Maharashtra
        </p>
      </div>

      <div className="contact-box">
        <h3>📞 Phone</h3>
        <p>+91 9823291444</p>
      </div>

      <div className="contact-box">
        <h3>📧 Email</h3>
        <p>mauliautomobiles@gmail.com</p>
      </div>

      <div className="contact-box">
  <h3>🕒 Business Hours</h3>
  <p>
    Monday - Saturday<br />
    9:00 AM - 8:00 PM
    <br /><br />
    Sunday<br />
    9:00 AM - 3:00 PM
  </p>
</div>

    </div>

    <div className="contact-form">

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="email"
        placeholder="Email Address"
      />

      <input
        type="tel"
        placeholder="Phone Number"
      />

      <textarea
        rows="6"
        placeholder="Write your message..."
      ></textarea>

      <button>Send Message</button>

    </div>

  </div>

</section>
    </>
  );
}

export default App;