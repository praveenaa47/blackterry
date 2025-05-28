import React from 'react';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid px-0">

      {/* Top Bar */}
      <div
        className="text-center py-1"
        style={{
          backgroundColor: '#D4CABC',
          
        }}
      >
        <h6
          className="m-0"
          style={{
            color: '#806248',
            fontSize: '0.9rem',
            fontWeight: '500',
            letterSpacing: '1px',
            padding:"5px"
          }}
        >
          BLACKTERRY
        </h6>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-fluid px-3 py-3 border-bottom">
        <div
          className="header-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            marginTop:"20px"
          }}
        >
          {/* Left Navigation */}
          <div className="d-flex gap-3 justify-content-start flex-wrap">
  <Link to="/" className="text-decoration-none text-dark">
    <h6 className="m-0 fw-light">NEW</h6>
  </Link>
  <Link to="/shop" className="text-decoration-none text-dark">
    <h6 className="m-0 fw-light">SHOP</h6>
  </Link>
  <Link to="/about" className="text-decoration-none text-dark">
    <h6 className="m-0 fw-light">ABOUT</h6>
  </Link>
  <Link to="/contact" className="text-decoration-none text-dark">
    <h6 className="m-0 fw-light">CONTACT</h6>
  </Link>
</div>
          {/* Center Logo */}
          <div className="text-center">
            <h3
              className="m-0 fw-bold text-uppercase"
              style={{
                letterSpacing: '1px',
                color: '#000',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              }}
            >
              BLACKTERRY
            </h3>
          </div>

          {/* Right Icons */}
          <div className="d-flex gap-3 justify-content-end fs-5">
  <Link to="" className="text-dark">
    <CiSearch />
  </Link>
  <Link to="/profile" className="text-dark">
  <IoPersonOutline />
    </Link>
  <Link to="/wishlist" className="text-dark">
    <CiHeart />
  </Link>
  <Link to="/cart" className="text-dark">
    <CiShoppingCart />
  </Link>
</div>
        </div>
      </div>

    </div>
  );
}

export default Header;
