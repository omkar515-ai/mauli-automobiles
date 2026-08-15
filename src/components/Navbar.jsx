import { useState } from "react";
import "./components.css";

function Navbar({
  partSearch,
  setPartSearch,
  showPartSearch,
  setShowPartSearch,
  partSearchResults,
  openSearchedPart

}) {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
  setMobileMenuOpen(false);
};

  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <nav className="navbar">

  <a href="#" className="logo">
    <span>MAULI</span> AUTOMOBILES
  </a>

  {/* MOBILE MENU BUTTON */}
  <button
    type="button"
    className="mobile-menu-btn"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    ☰
  </button>

  {/* NAV LINKS */}
  <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
<li>
  <a href="#" onClick={closeMobileMenu}>Home</a>
</li>

<li>
  <a href="#about" onClick={closeMobileMenu}>About</a>
</li>

<li>
  <a href="#brands" onClick={closeMobileMenu}>Brands</a>
</li>

<li>
  <a href="#products" onClick={closeMobileMenu}>Products</a>
</li>

<li>
  <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
</li>

<li>
  <a href="#contact" onClick={closeMobileMenu}>Contact</a>
</li>
  </ul>


      {/* ================= PART SEARCH ================= */}

      <div className="navbar-part-search">

        <div className="part-search-box">

          <span className="part-search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search spare parts..."
            value={partSearch}
            onFocus={() => setShowPartSearch(true)}
            onChange={(e) => {
              setPartSearch(e.target.value);
              setShowPartSearch(true);
            }}
          />

          {partSearch && (
            <button
              type="button"
              className="part-search-clear"
              onClick={() => {
                setPartSearch("");
                setShowPartSearch(false);
              }}
            >
              ×
            </button>
          )}

        </div>


        {/* ================= SEARCH RESULTS ================= */}

        {showPartSearch && partSearch.trim() && (

          <div className="part-search-results">

            {partSearchResults.length > 0 ? (

              partSearchResults.slice(0, 8).map((result, index) => (

                <button
                  type="button"
                  className="part-search-result"
                  key={`${result.part}-${index}`}
                  onClick={() => openSearchedPart(result)}
                >

                  <span className="search-result-icon">
                    {result.product.icon}
                  </span>

                  <span className="search-result-info">

                    <strong>
                      {result.part}
                    </strong>

                    <small>
                      {result.product.name}
                    </small>

                  </span>

                  <span className="search-result-arrow">
                    →
                  </span>

                </button>

              ))

            ) : (

              <div className="no-search-results">

                <span>
                  🔍
                </span>

                <p>
                  No matching spare part found
                </p>

                <small>
                  Try another part name
                </small>

              </div>

            )}

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;