import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTruck,
  FaRegCreditCard,
} from "react-icons/fa";
import Footer from '/src/Components/Footer'
import { IoMdInformationCircleOutline } from "react-icons/io";
import fullimge from "/src/assets/fullimge.jpg";
import neck from "/src/assets/neck.jpg";
import size from "/src/assets/size.jpg";
import stich from "/src/assets/stich.jpg";

// New shirt images
import shirt11 from "/src/assets/tshirt15.jpg";
import shirt12 from "/src/assets/tshirt3.jpg";
import shirt13 from "/src/assets/tshirt14.jpg";
import shirt14 from "/src/assets/tshirt15.jpg";
import Header from "/src/Components/Header";

function Details() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = [
    { name: "black", hex: "#000000" },
    { name: "grey", hex: "#808080" },
    { name: "lightgrey", hex: "#D3D3D3" },
  ];

  const sizes = ["M", "L", "XL", "XXL"];

  const recommendedProducts = [
    {
      id: 1,
      name: "CoolFit T-Shirt",
      price: "₹799",
      image: shirt11,
    },
    {
      id: 2,
      name: "BreezeWear Tee",
      price: "₹899",
      image: shirt12,
    },
    {
      id: 3,
      name: "Urban Classic",
      price: "₹1099",
      image: shirt13,
    },
    {
      id: 4,
      name: "Graphix Printed Tee",
      price: "₹999",
      image: shirt14,
    },
  ];

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row">
          {/* Left side - Product Images */}
          <div className="col-md-1 d-none d-md-block">
            <div className="small-img-column">
              {[fullimge, neck, size, stich].map((img, idx) => (
                <div key={idx} className="small-img-wrapper mb-3">
                  <img
                    src={img}
                    alt={`Small view ${idx + 1}`}
                    className="img-fluid border"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Product Image */}
          <div className="col-md-5">
            <div className="main-img-wrapper">
              <img src={fullimge} alt="Main Product" className="img-fluid" />
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="col-md-6">
            <div className="product-details">
              <h2 className="fw-bold mb-1">
                Men's Retro Color Crew Neck T-shirt Casual Cotton
              </h2>

              <div className="price-section mb-3">
                <span className="current-price fw-bold me-2">₹999</span>
                <span className="original-price text-decoration-line-through text-muted">
                  ₹1499
                </span>
                <span className="discount-badge text-success ms-2">
                  <IoMdInformationCircleOutline className="me-1" />
                  Save 33% right now
                </span>
              </div>

              <div className="color-section mb-3">
                <p className="fw-bold mb-2">Colors</p>
                <div className="color-options d-flex gap-2">
                  {colors.map((color) => (
                    <div
                      key={color.name}
                      className={`color-circle ${
                        selectedColor === color.name
                          ? "border border-2 border-dark"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>

              <div className="size-section mb-3">
                <p className="fw-bold mb-2">Select Size</p>
                <div className="size-options d-flex gap-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className={`size-box d-flex justify-content-center align-items-center ${
                        selectedSize === size ? "bg-dark text-white" : "border"
                      }`}
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="quantity-section mb-3">
                <p className="fw-bold mb-2">Quantity</p>
                <div className="quantity-selector d-flex align-items-center border">
                  <button
                    className="btn btn-light border-end"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    className="form-control border-0 text-center"
                    value={quantity}
                    readOnly
                    style={{ width: "50px" }}
                  />
                  <button
                    className="btn btn-light border-start"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="action-buttons mb-3 d-flex gap-2">
                <button
                  className="btn btn-dark py-2 px-4 flex-grow-1"
                  style={{ backgroundColor: "#50311D" }}
                >
                  <FaShoppingCart className="me-2" />
                  Add to cart
                </button>
                <button className="btn btn-outline-dark py-2 px-3">
                  <FaHeart />
                </button>
              </div>

              <div className="buy-now-section mb-3">
                <button
                  className="btn btn-danger w-100 py-2"
                  style={{ backgroundColor: "#50311D" }}
                >
                  <FaRegCreditCard className="me-2" />
                  Buy it now
                </button>
              </div>

              <div className="accordion mb-3">
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      <span className="fw-bold">Product Specifications</span>
                      {/* <FaChevronDown className="ms-auto" /> */}
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p>
                        High-quality cotton material, comfortable fit, machine
                        washable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      <span className="fw-bold">Shipping & Return</span>
                      {/* <FaChevronDown className="ms-auto" /> */}
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <p>
                        Free shipping on orders above ₹999. 30-day return
                        policy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      <span className="fw-bold">Wash Care</span>
                      {/* <FaChevronDown className="ms-auto" /> */}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <p>Machine wash cold, do not bleach, tumble dry low.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shipping-info small text-muted mb-3 d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <p>
                    <FaTruck className="me-2" />
                    Free shipping in 2-3 business days
                  </p>
                  <p>Handcrafted with care, made from the heart.</p>
                </div>
                <div>
                  <a href="/size-chart" className="btn text-muted btn-sm mb-5">
                    View Size Chart
                  </a>
                </div>
              </div>

              <div className="product-description mb-3">
                <p className="small text-muted">
                  <IoMdInformationCircleOutline className="me-1" />{" "}
                  <strong>Color Disclaimer:</strong> Actual product colors may
                  vary slightly due to different screen resolutions and lighting
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className="recommended-section mt-5">
          <h3 className="mb-4 fw-bold">FIND YOUR NEXT FAVORITE</h3>
          <div className="row">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-3 mb-4">
                <div className="card border-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body px-0">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Details;
