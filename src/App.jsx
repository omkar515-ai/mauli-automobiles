import "./App.css";
import Navbar from "./components/Navbar";

import React, { useState } from "react";

import hondaLogo from "./assets/logo/honda.webp";
import heroLogo from "./assets/logo/hero.png";
import spareParts from "./assets/spareparts.png";

import img17 from "./assets/gallery/about1.jpeg";
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
import img20 from "./assets/gallery/17.jpeg";




import hero from "./assets/hero1.png";

import about from "./assets/about.jpeg";
import {
  FaPhone,
  FaLocationDot,
  FaEnvelope
} from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa";


function App() {
const galleryImages = [
  {
    src: img17,
    title: "Our Showroom",
    category: "Showroom",
  },
  {
    src: img2,
    title: "Genuine Hero Parts",
    category: "Hero",
  },
  {
    src: img3,
    title: "Mauli Automobiles",
    category: "Store",
  },
  {
    src: img4,
    title: "Honda & Hero Parts",
    category: "Brands",
  },
  {
    src: img5,
    title: "Genuine Spare Parts",
    category: "Products",
  },
  {
    src: img6,
    title: "Our Parts Collection",
    category: "Products",
  },
  {
    src: img7,
    title: "Hero Genuine Parts",
    category: "Hero",
  },
  {
    src: img9,
    title: "Automobile Parts",
    category: "Products",
  },
  {
    src: img10,
    title: "Honda Parts",
    category: "Honda",
  },
  {
    src: img12,
    title: "Spare Parts Collection",
    category: "Products",
  },
  {
    src: img13,
    title: "Our Store",
    category: "Showroom",
  },
  {
    src: img1,
    title: "Mauli Automobiles",
    category: "Showroom",
  },
  {
    src: img18,
    title: "Parts & Accessories",
    category: "Products",
  },
  {
    src: img19,
    title: "Our Collection",
    category: "Store",
  },
  {
    src: img20,
    title: "Mauli Automobiles Ambajogai",
    category: "Showroom",
  },
];
const productCatalog = [

  {
    name: "Engine Components",
    category: "Engine",
    icon: "⚙️",
    description:
      "Engine components and replacement parts for Hero and Honda two-wheelers.",
    parts: [
      "Piston Kit",
      "Piston",
      "Piston Rings",
      "Cylinder",
      "Cylinder Block",
      "Cylinder Head",
      "Valves",
      "Valve Guide",
      "Valve Seal",
      "Valve Spring",
      "Camshaft",
      "Cam Chain",
      "Cam Chain Tensioner",
      "Timing Gear",
      "Connecting Rod",
      "Crankshaft",
      "Crankshaft Bearing",
      "Main Bearing",
      "Engine Gasket Set",
      "Head Gasket",
      "Clutch Cover Gasket",
      "Oil Seal",
      "Engine Oil Seal",
      "Kick Shaft",
      "Kick Shaft Gear",
      "Starter Motor Gear",
      "Engine Mounting Parts"
    ]
  },


  {
    name: "Clutch & Transmission",
    category: "Clutch",
    icon: "🔧",
    description:
      "Clutch, gearbox and transmission components for smooth power delivery.",
    parts: [
      "Clutch Plates",
      "Clutch Plate Set",
      "Clutch Pressure Plate",
      "Clutch Springs",
      "Clutch Housing",
      "Clutch Centre",
      "Clutch Cable",
      "Clutch Lever",
      "Clutch Release Bearing",
      "Gear Lever",
      "Gear Lever Rubber",
      "Gear Shaft",
      "Gear Shaft Seal",
      "Gear Selector",
      "Gear Selector Fork",
      "Gearbox Bearing",
      "Kick Starter Gear",
      "Kick Starter Shaft",
      "Drive Chain",
      "Sprocket Set",
      "Front Sprocket",
      "Rear Sprocket"
    ]
  },


  {
    name: "Brake System",
    category: "Brakes",
    icon: "🛑",
    description:
      "Brake components for safe and reliable braking performance.",
    parts: [
      "Front Brake Pads",
      "Rear Brake Shoes",
      "Brake Shoe Set",
      "Brake Disc",
      "Front Brake Disc",
      "Rear Brake Disc",
      "Brake Drum",
      "Brake Cable",
      "Front Brake Cable",
      "Rear Brake Cable",
      "Brake Lever",
      "Brake Pedal",
      "Master Cylinder",
      "Master Cylinder Kit",
      "Brake Caliper",
      "Caliper Seal Kit",
      "Brake Hose",
      "Brake Fluid",
      "Brake Switch",
      "Brake Spring",
      "Brake Rod"
    ]
  },


  {
    name: "Electrical & Lighting",
    category: "Electrical",
    icon: "🔋",
    description:
      "Electrical, ignition, charging and lighting components.",
    parts: [
      "Battery",
      "Headlight Bulb",
      "Headlight Assembly",
      "Tail Light",
      "Tail Light Bulb",
      "Indicators",
      "Indicator Bulb",
      "Horn",
      "Ignition Coil",
      "Spark Plug",
      "Spark Plug Cap",
      "CDI Unit",
      "ECU Unit",
      "Regulator Rectifier",
      "Stator Coil",
      "Magnet Coil",
      "Starter Motor",
      "Starter Relay",
      "Main Fuse",
      "Fuse Box",
      "Wiring Harness",
      "Ignition Switch",
      "Key Set",
      "Handlebar Switch",
      "Brake Switch",
      "Neutral Switch",
      "Speedometer Cable",
      "Sensors"
    ]
  },


  {
    name: "Fuel & Air System",
    category: "Fuel",
    icon: "⛽",
    description:
      "Fuel supply, air intake and throttle-related components.",
    parts: [
      "Air Filter",
      "Air Filter Element",
      "Oil Filter",
      "Fuel Filter",
      "Fuel Tap",
      "Fuel Pipe",
      "Fuel Tank Cap",
      "Carburetor",
      "Carburetor Repair Kit",
      "Carburetor Diaphragm",
      "Throttle Cable",
      "Choke Cable",
      "Throttle Body",
      "Fuel Injector",
      "Injector O-Ring",
      "Intake Manifold",
      "Air Hose",
      "Air Box Components"
    ]
  },


  {
    name: "Suspension & Steering",
    category: "Suspension",
    icon: "🏍️",
    description:
      "Front suspension, rear suspension and steering components.",
    parts: [
      "Front Fork",
      "Front Fork Tube",
      "Fork Seal",
      "Fork Dust Seal",
      "Fork Bush",
      "Fork Oil",
      "Rear Shock Absorber",
      "Rear Suspension Bush",
      "Steering Cone Set",
      "Steering Bearing",
      "Handlebar",
      "Handlebar Bush",
      "Handlebar Weight",
      "Front Wheel Bearing",
      "Rear Wheel Bearing",
      "Swingarm Bush",
      "Swingarm Bearing"
    ]
  },


  {
    name: "Wheels & Tyre Components",
    category: "Wheels",
    icon: "⭕",
    description:
      "Wheel, tyre and related components for two-wheelers.",
    parts: [
      "Front Wheel",
      "Rear Wheel",
      "Alloy Wheel",
      "Wheel Rim",
      "Wheel Bearing",
      "Wheel Seal",
      "Tyre",
      "Tube",
      "Tubeless Valve",
      "Wheel Spoke",
      "Spoke Set",
      "Wheel Nut",
      "Wheel Axle",
      "Front Axle",
      "Rear Axle"
    ]
  },


  {
    name: "Body & Exterior Parts",
    category: "Body",
    icon: "🏍️",
    description:
      "Genuine exterior and body components for Hero and Honda vehicles.",
    parts: [
      "Front Mudguard",
      "Rear Mudguard",
      "Side Panel",
      "Side Cover",
      "Front Panel",
      "Headlight Visor",
      "Tail Panel",
      "Chain Cover",
      "Battery Cover",
      "Tool Box",
      "Seat",
      "Seat Cover",
      "Fuel Tank",
      "Fuel Tank Cover",
      "Number Plate Holder",
      "Leg Guard",
      "Crash Guard",
      "Footrest",
      "Pillion Footrest",
      "Main Stand",
      "Side Stand",
      "Stand Spring"
    ]
  },


  {
    name: "Controls & Cables",
    category: "Controls",
    icon: "🎛️",
    description:
      "Handlebar controls, levers, cables and rider control components.",
    parts: [
      "Clutch Cable",
      "Throttle Cable",
      "Front Brake Cable",
      "Rear Brake Cable",
      "Choke Cable",
      "Speedometer Cable",
      "Clutch Lever",
      "Brake Lever",
      "Gear Lever",
      "Kick Lever",
      "Handle Grip",
      "Throttle Grip",
      "Handlebar",
      "Handlebar Switch",
      "Horn Switch",
      "Indicator Switch",
      "Light Switch",
      "Mirror Set"
    ]
  },


  {
    name: "Oils & Lubricants",
    category: "Maintenance",
    icon: "🛢️",
    description:
      "Engine oils, lubricants and maintenance products for two-wheelers.",
    parts: [
      "Engine Oil",
      "Gear Oil",
      "Fork Oil",
      "Brake Fluid",
      "Coolant",
      "Grease",
      "Chain Lube",
      "Chain Cleaner",
      "Engine Cleaner",
      "Bike Wash",
      "Polish",
      "Rust Remover",
      "Lubricating Spray"
    ]
  },


  {
    name: "Accessories",
    category: "Accessories",
    icon: "🛵",
    description:
      "Useful two-wheeler accessories and genuine vehicle fittings.",
    parts: [
      "Helmet",
      "Rear View Mirror",
      "Seat Cover",
      "Handle Grip",
      "Mobile Holder",
      "Bike Cover",
      "Number Plate Frame",
      "Key Chain",
      "Leg Guard",
      "Crash Guard",
      "Footrest",
      "Side Stand",
      "Main Stand",
      "Horn",
      "LED Bulb",
      "USB Charger",
      "Vehicle Lock",
      "Disc Lock"
    ]
  }

];
const [selectedImage, setSelectedImage] = useState(null);
const [selectedCatalogProduct, setSelectedCatalogProduct] = useState(null);
const [selectedPart, setSelectedPart] = useState("");
const [customPart, setCustomPart] = useState("");
const [selectedBrand, setSelectedBrand] = useState("Hero");
const [vehicleModel, setVehicleModel] = useState("");
const [emissionStandard, setEmissionStandard] = useState("BS6");
const [chassisNumber, setChassisNumber] = useState("");

const [partSearch, setPartSearch] = useState("");
const [showPartSearch, setShowPartSearch] = useState(false);

const partSearchResults = productCatalog.flatMap((product) =>
  product.parts
    .filter((part) =>
      part.toLowerCase().includes(partSearch.toLowerCase())
    )
    .map((part) => ({
      part,
      product
    }))
);

const openSearchedPart = (result) => {

  setSelectedCatalogProduct(result.product);
  setSelectedPart(result.part);
  setCustomPart("");
  setSelectedBrand("Hero");
  setVehicleModel("");
  setEmissionStandard("BS6");
  setChassisNumber("");

  setPartSearch("");
  setShowPartSearch(false);

  document.body.style.overflow = "hidden";
};

const openProductRequest = (requestType) => {

  const requestedPart = customPart.trim() || selectedPart;

  if (!selectedCatalogProduct || !requestedPart) return;

  let vehicleIdentification = "";

  if (emissionStandard === "Chassis No.") {
    vehicleIdentification = `Chassis Number: ${chassisNumber || "Not provided"}`;
  } else {
    vehicleIdentification = `Emission Standard: ${emissionStandard}`;
  }

  const message =
`Hello Mauli Automobiles,
I want to ${requestType}.

Part: ${requestedPart}
Vehicle Brand: ${selectedBrand}
Vehicle Model: ${vehicleModel || "Not provided"}
${vehicleIdentification}

Thank you.`;

  window.open(
    `https://wa.me/919823291444?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <>
      <Navbar
  partSearch={partSearch}
  setPartSearch={setPartSearch}
  showPartSearch={showPartSearch}
  setShowPartSearch={setShowPartSearch}
  partSearchResults={partSearchResults}
  openSearchedPart={openSearchedPart}
/>

  <section className="hero" id="home">

    <div className="hero-bg">
        <img src={hero} alt="Hero Honda Spare Parts" />
    </div>

    <div className="hero-content">

        <div className="hero-badge">
            🛡 TRUSTED HERO & HONDA SPARE PARTS DEALER
        </div>
        

        <h1>
            Hero & Honda
            <br />
            <span>Spare Parts</span>
        </h1>

        <div className="hero-line"></div>

        <p>
            Mauli Automobiles is your trusted destination for genuine Hero &
            Honda two-wheeler spare parts. We provide original engine,
            brake, clutch, electrical, body parts and accessories at
            affordable prices with reliable customer support.
        </p>

        <div className="hero-buttons">
            <button type="button" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>🛒 View Products</button>
            <button type="button" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>📞 Contact Us</button>
        </div>

        <div className="hero-features">
            <div>✅ 100% Genuine Parts</div>
            <div>⭐ Trusted Dealer</div>
            <div>💰 Affordable Prices</div>
            <div>🎧 Fast Support</div>
        </div>

    </div>

</section>

    <section className="about" id="about">

  <div className="about-container">

    <span className="about-tag">
      ABOUT MAULI AUTOMOBILES
    </span>

    <h2>
      Trusted <span>Hero & Honda</span><br />
      Spare Parts Dealer
    </h2>

    <div className="about-image">
      <img src={about} alt="Mauli Automobiles Shop" />
    </div>

    <p>
      Mauli Automobiles is your trusted destination for genuine Hero & Honda
      two-wheeler spare parts. We provide original engine parts, brake parts,
      clutch plates, electrical components, cables, lubricants, body parts and
      accessories at affordable prices.
    </p>

    <p>
      Our goal is to provide every customer with genuine products, reasonable
      pricing and excellent customer service. We believe in quality, trust and
      long-lasting customer relationships.
    </p>

    <div className="about-features">

      <div className="feature-box">✅ Genuine Parts</div>

      <div className="feature-box">🏍 Hero & Honda Specialist</div>

      <div className="feature-box">💰 Affordable Prices</div>

      <div className="feature-box">🤝 Customer Satisfaction</div>

    </div>

    <div className="about-stats">

      <div className="stat-box">
        <h3>5000+</h3>
        <span>Happy Customers</span>
      </div>

      <div className="stat-box">
        <h3>100%</h3>
        <span>Genuine Parts</span>
      </div>

      <div className="stat-box">
        <h3>10+</h3>
        <span>Years Experience</span>
      </div>

    </div>

    <div className="about-buttons">
      <button type="button" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>🛒 View Products</button>
      <button type="button" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>📞 Contact Us</button>
    </div>

  </div>

</section>

{/* ================= OUR BRANDS ================= */}

<section className="brands-section" id="brands">

  <div className="brands-header">

    <span className="brands-tag">
      OUR BRANDS
    </span>

    <h2>
      Trusted <span>Brands</span>
    </h2>

    <p>
      We deal in genuine Hero and Honda two-wheeler spare parts,
      providing reliable products for your motorcycle and scooter.
    </p>

    <div className="brands-line"></div>

  </div>


  <div className="brands-grid">

    {/* HONDA CARD */}

    <div className="brand-card">

      <div className="brand-logo-box">
        <img
          src={hondaLogo}
          alt="Honda Genuine Spare Parts"
        />
      </div>

      <div className="brand-info">

        <span className="brand-small">
          GENUINE SPARE PARTS
        </span>

        <h3>Honda</h3>

        <p>
          Genuine Honda spare parts for motorcycles and scooters,
          including engine, brake, clutch, electrical and body parts.
        </p>

        <div className="brand-badge">
          ✓ 100% Genuine Products
        </div>

      </div>

    </div>


    {/* HERO CARD */}

    <div className="brand-card">

      <div className="brand-logo-box">
        <img
          src={heroLogo}
          alt="Hero Genuine Spare Parts"
        />
      </div>

      <div className="brand-info">

        <span className="brand-small">
          GENUINE SPARE PARTS
        </span>

        <h3>Hero</h3>

        <p>
          Genuine Hero spare parts for motorcycles and scooters,
          with reliable components for everyday performance.
        </p>

        <div className="brand-badge">
          ✓ 100% Genuine Products
        </div>

      </div>

    </div>

  </div>


  {/* BOTTOM CTA */}

  <div className="brands-bottom">

    <h3>
      Looking for a specific <span>Hero or Honda</span> part?
    </h3>

    <p>
      Contact us and we will help you find the right spare part
      for your vehicle.
    </p>

    <div className="brands-buttons">

      <button type="button" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>
        🛒 View Products
      </button>

      <button type="button" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
        📞 Contact Us
      </button>

    </div>

  </div>

</section>
{/* ================= OUR PRODUCTS ================= */}

<section className="products-section" id="products">

  <div className="products-header">

    <span className="products-tag">
      OUR PRODUCTS
    </span>

    <h2>
      Genuine <span>Spare Parts</span>
    </h2>

    <p>
      A complete range of genuine Hero & Honda two-wheeler spare parts,
      carefully sourced for quality and reliability.
    </p>

    <div className="products-line"></div>

  </div>


  <p className="products-catalog-note">
    Select a category and send your vehicle model to confirm compatibility and availability.
  </p>

  <div className="products-grid">
    {productCatalog.map((product) => (
      <article className="product-card" key={product.name}>
        <div className="product-icon" aria-hidden="true">{product.icon}</div>

        <div className="product-content">
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button
            type="button"
            className="product-enquiry"
            onClick={() => {
              setSelectedCatalogProduct(product);
              setSelectedPart(product.parts[0]);
              setCustomPart("");
              setSelectedBrand("Hero");
              setVehicleModel("");
            }}
          >
            View all parts →
          </button>
        </div>

        <div className="product-brand">HERO & HONDA · AVAILABLE ON REQUEST</div>
      </article>
    ))}
  </div>

  {selectedCatalogProduct && (
    <div className="product-modal-backdrop" role="presentation" onMouseDown={() => setSelectedCatalogProduct(null)}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="product-modal-close" onClick={() => setSelectedCatalogProduct(null)} aria-label="Close product chooser">×</button>

        <span className="product-category">{selectedCatalogProduct.category}</span>
        <h3 id="product-modal-title">{selectedCatalogProduct.name}</h3>
        <p>Choose the part, then select the vehicle brand and model for an accurate match.</p>

        <div className="part-options" aria-label="Choose a part">
          {selectedCatalogProduct.parts.map((part) => (
            <button type="button" key={part} className={selectedPart === part && !customPart ? "selected" : ""} onClick={() => { setSelectedPart(part); setCustomPart(""); }}>{part}</button>
          ))}
        </div>

        <label className="vehicle-model-label custom-part-label">
          Can't find the part? <span>Type its name and we will source it if possible.</span>
          <input type="text" value={customPart} onChange={(event) => setCustomPart(event.target.value)} placeholder="Example: Engine timing chain tensioner" />
        </label>

        <div className="brand-options" aria-label="Choose a company">
          {["Hero", "Honda"].map((brand) => (
            <button type="button" key={brand} className={selectedBrand === brand ? "selected" : ""} onClick={() => setSelectedBrand(brand)}>{brand}</button>
          ))}
        </div>

        <label className="vehicle-model-label">
          Vehicle model <span>(recommended)</span>
          <input type="text" value={vehicleModel} onChange={(event) => setVehicleModel(event.target.value)} placeholder="Example: Splendor Plus / Activa 6G" />
        </label>

        

 <div className="vehicle-identification">

  <label>
    Vehicle Identification
  </label>

  <span>
    Select your bike's BS version or provide the chassis number
  </span>

  <div className="emission-options">

    <button
      type="button"
      className={emissionStandard === "BS3" ? "selected" : ""}
      onClick={() => setEmissionStandard("BS3")}
    >
      BS3
    </button>

    <button
      type="button"
      className={emissionStandard === "BS4" ? "selected" : ""}
      onClick={() => setEmissionStandard("BS4")}
    >
      BS4
    </button>

    <button
      type="button"
      className={emissionStandard === "BS6" ? "selected" : ""}
      onClick={() => setEmissionStandard("BS6")}
    >
      BS6
    </button>

    <button
      type="button"
      className={emissionStandard === "Chassis No." ? "selected" : ""}
      onClick={() => setEmissionStandard("Chassis No.")}
    >
      Chassis No.
    </button>

  </div>

  {emissionStandard === "Chassis No." && (
    <input
      type="text"
      className="chassis-input"
      placeholder="Enter chassis number"
      value={chassisNumber}
      onChange={(e) => setChassisNumber(e.target.value)}
    />
  )}

</div>
        <div className="product-request-actions">
          <button type="button" className="availability-button" onClick={() => openProductRequest("check availability for")}>Ask availability</button>
          <button type="button" className="booking-button" onClick={() => openProductRequest("book")}>Book this part</button>
        </div>
      </section>
    </div>
  )}


  {/* PRODUCTS CTA */}

  <div className="products-cta">

    <h3>
      Need a specific <span>spare part?</span>
    </h3>

    <p>
      Contact Mauli Automobiles and we'll help you find the right part
      for your Hero or Honda two-wheeler.
    </p>

    <button type="button" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
      📞 Contact Us
    </button>

  </div>

</section>

{/* =========================
    GALLERY SECTION
========================= */}

<section id="gallery" className="gallery-section">

  <div className="gallery-heading">

    <span className="gallery-small-title">
      MAULI AUTOMOBILES
    </span>

    <h2>Our Showroom</h2>

    <p>
      Explore our showroom, genuine spare parts collection
      and trusted automotive products.
    </p>

  </div>


  <div className="gallery-grid">

    {galleryImages.map((image, index) => (

      <div
        key={index}
        className={`gallery-card gallery-card-${index + 1}`}
        onClick={() => setSelectedImage(image)}
      >

        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
        />

        <div className="gallery-overlay">

          <div>
            <span>{image.category}</span>
            <h3>{image.title}</h3>
          </div>

          <div className="gallery-view">
            ↗
          </div>

        </div>

      </div>

    ))}

  </div>


  {/* IMAGE LIGHTBOX */}

  {selectedImage && (

    <div
      className="gallery-lightbox"
      onClick={() => setSelectedImage(null)}
    >

      <button
        className="gallery-close"
        onClick={() => setSelectedImage(null)}
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src={selectedImage.src}
        alt={selectedImage.title}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="lightbox-title">

        <span>
          {selectedImage.category}
        </span>

        <h3>
          {selectedImage.title}
        </h3>

      </div>

    </div>

  )}

</section>
{/* ================= CONTACT ================= */}

<section id="contact" className="contact-section">

  {/* ================= CONTACT HEADER ================= */}

  <div className="contact-header">

    <div className="contact-icon">
      <FaPhone />
    </div>

    <span className="contact-tag">
      CONTACT US
    </span>

    <h2>
      Get in <span>Touch</span>
    </h2>

    <h3>
      Need <span>Genuine Hero & Honda</span> Spare Parts?
    </h3>

    <p>
      We're here to help! Contact us for product availability,
      prices, bulk orders, or directions to our store.
    </p>

    <div className="contact-line"></div>

  </div>


  {/* ================= CONTACT TOP ================= */}

  <div className="contact-top">

    {/* ================= STORE CARD ================= */}

    <div className="store-card">

      <div className="store-main">

        <div className="store-info">

          <div className="contact-card-title">

            <div className="contact-card-icon">
              <FaLocationDot />
            </div>

            <div>
              <span>VISIT US</span>
              <h3>Our Store</h3>
            </div>

          </div>


          <h4>
            Mauli Automobiles
          </h4>


          <p>
            Raje Shiv Chatrapati N.P. Complex,
            <br />
            Mondha Road,
            <br />
            Ambajogai, Maharashtra - 431517
          </p>


          <a
            href="https://www.google.com/maps/dir//Mauli+Automobiles,+Raje+shiv+Chatrapati+N.+P.+complex,+Mondha+Rd,+Jaywanti+Nagar,+Ambajogai,+Maharashtra+431517/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <FaLocationDot />
            Get Directions →
          </a>

        </div>


        {/* REAL SHOWROOM IMAGE */}

        <div className="store-image">

          <img
            src={img17}
            alt="Mauli Automobiles Showroom"
          />

        </div>

      </div>


      <hr />


      {/* BUSINESS HOURS */}

      <h3 className="hours-title">
        🕒 Business Hours
      </h3>


      <div className="hours-row">

        <span>
          Monday - Saturday
        </span>

        <strong>
          9:00 AM - 8:00 PM
        </strong>

      </div>


      <div className="hours-row">

        <span>
          Sunday
        </span>

        <strong>
          9:00 AM - 3:00 PM
        </strong>

      </div>

    </div>


    {/* ================= WHY CHOOSE US ================= */}

    <div className="why-card">

      <div className="contact-card-title">

        <div className="contact-card-icon">
          ⭐
        </div>

        <div>

          <span>
            WHY US
          </span>

          <h3>
            Why Choose Mauli?
          </h3>

        </div>

      </div>


      <ul>

        <li>
          <span>✓</span>
          Genuine Honda Spare Parts
        </li>

        <li>
          <span>✓</span>
          Genuine Hero Spare Parts
        </li>

        <li>
          <span>✓</span>
          Trusted Local Dealer
        </li>

        <li>
          <span>✓</span>
          Affordable Prices
        </li>

        <li>
          <span>✓</span>
          Bulk Orders Available
        </li>

        <li>
          <span>✓</span>
          Fast Customer Support
        </li>

      </ul>


      {/* SPARE PARTS IMAGE */}

      <img
        src={spareParts}
        alt="Genuine Hero Honda Spare Parts"
        className="parts-image"
      />

    </div>

  </div>


  {/* ================= CONTACT ACTIONS ================= */}

  <div className="contact-actions">


    {/* CALL */}

    <a
      href="tel:+919823291444"
      className="contact-action phone-action"
    >

      <span className="contact-icon-phone">
        <FaPhone />
      </span>

      <div>

        <small>
          CALL US
        </small>

        <strong>
          +91 9823291444
        </strong>

      </div>

    </a>


    {/* EMAIL */}

    <a
      href="mailto:mauliautomobiles1444@gmail.com"
      className="contact-action email-action"
    >

      <span className="contact-icon-email">
        <FaEnvelope />
      </span>

      <div>

        <small>
          EMAIL US
        </small>

        <strong>
          mauliautomobiles1444@gmail.com
        </strong>

      </div>

    </a>


    {/* WHATSAPP */}

    <a
      href="https://wa.me/919823291444"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-action whatsapp-action"
    >

      <span className="contact-icon-whatsapp">
        <FaWhatsapp />
      </span>

      <div>

        <small>
          WHATSAPP
        </small>

        <strong>
          +91 9823291444
        </strong>

      </div>

    </a>

  </div>

</section>
<footer className="footer">

  <div className="footer-container">

    {/* ================= COMPANY ================= */}

    <div className="footer-company">

      <div className="footer-logo">
        <span>MAULI</span>
        <strong>AUTOMOBILES</strong>
      </div>

      <p>
        Your trusted destination for Genuine Hero & Honda
        two-wheeler spare parts in Ambajogai.
      </p>

      <div className="footer-contact">

        <a href="tel:+919823291444">
          <span className="footer-icon phone-icon">
            <FaPhone />
          </span>

          <div>
            <small>CALL US</small>
            <strong>+91 9823291444</strong>
          </div>
        </a>


        <a
          href="https://www.google.com/maps/dir//Mauli+Automobiles,+Raje+shiv+Chatrapati+N.+P.+complex,+Mondha+Rd,+Jaywanti+Nagar,+Ambajogai,+Maharashtra+431517/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <span className="footer-icon location-icon">
            <FaLocationDot />
          </span>

          <div>
            <small>VISIT US</small>
            <strong>Mondha Road, Ambajogai</strong>
          </div>

        </a>


        <a href="mailto:mauliautomobiles1444@gmail.com">

          <span className="footer-icon email-icon">
            <FaEnvelope />
          </span>

          <div>
            <small>EMAIL US</small>
            <strong>mauliautomobiles1444@gmail.com</strong>
          </div>

        </a>

      </div>

    </div>


    {/* ================= QUICK LINKS ================= */}

    <div className="footer-column">

      <h3>Quick Links</h3>

      <div className="footer-heading-line"></div>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#brands">Brands</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </div>


    {/* ================= BUSINESS HOURS ================= */}

    <div className="footer-column">

      <h3>Business Hours</h3>

      <div className="footer-heading-line"></div>

      <div className="footer-hours">

        <div>
          <span>Monday - Saturday</span>
          <strong>9:00 AM - 8:00 PM</strong>
        </div>

        <div>
          <span>Sunday</span>
          <strong>9:00 AM - 3:00 PM</strong>
        </div>

      </div>


      <div className="footer-trust">

        <span>✓</span>

        <div>
          <strong>Genuine Parts</strong>
          <small>Hero & Honda Specialist</small>
        </div>

      </div>

    </div>

  </div>


  {/* ================= FOOTER BOTTOM ================= */}

  <div className="footer-bottom">

    <p>
      © 2026 <strong>Mauli Automobiles</strong>. All Rights Reserved.
    </p>

    <p>
      Made with ❤️ by
      <span> Omkar Patait</span>
    </p>

  </div>

</footer>
    </>
  );
}

export default App;
