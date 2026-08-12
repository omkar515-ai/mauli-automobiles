import "./components.css"; 

function Navbar({
  partSearch,
  setPartSearch,
  showPartSearch,
  setShowPartSearch,
  partSearchResults,
  openSearchedPart
}) {
  return (
    <nav className="navbar">

     <a href="#" className="logo">
  <span>MAULI</span> AUTOMOBILES
</a>

      {/* ================= NAV LINKS ================= */}

      <ul className="nav-links">

        <li>
          <a href="#">Home</a>
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