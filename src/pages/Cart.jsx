import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import image from "/src/assets/shirt1.jpg";
import { useNavigate } from "react-router-dom";
import Header from "/src/Components/Header";
import Footer from "/src/Components/Footer";

function Cart() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Men's Retro Crew Neck T shirt",
      price: 999,
      originalPrice: 1099,
      size: "S",
      color: "GREY",
      quantity: 1,
      image: image, // Product image
    },
  ]);

  return (
    <div>
      <Header />
      <div className="container my-4 px-3">
        {cartItems.length === 0 ? (
          <div
            className="d-flex flex-column align-items-center text-center"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <h2 className="fw-large mb-4">YOUR CART IS EMPTY</h2>
            <a
              href="/shop"
              className="text-decoration-none mb-3"
              style={{
                backgroundColor: "#50311D",
                padding: "10px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Continue shopping
            </a>
            <p className="text-muted small mb-2">HAVE AN ACCOUNT?</p>
            <p className="fw-small" style={{ cursor: "pointer" }}>
              <span
                onClick={handleLogin}
                style={{ textDecoration: "underline", color: "#50311D" }}
              >
                LOGIN
              </span>
              TO CHECK OUT FASTER
            </p>
          </div>
        ) : (
          // If cart has items, show cart content
          <>
            {/* Cart Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
              <h2 className="fw-bold">Your Cart</h2>
              <a href="#" className="text-decoration-none text-muted small">
                Continue shopping
              </a>
            </div>

            {/* Table Header */}
            <div className="d-none d-md-flex justify-content-between text-uppercase small border-bottom pb-2">
              <p className="mb-0 w-50">Product</p>
              <p className="mb-0 w-25 text-center me-5">Quantity</p>
              <p className="mb-0 w-25 text-end">Total</p>
            </div>

            {/* Cart Item */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom py-3 gap-3">
              {/* Product Details */}
              <div className="d-flex align-items-start gap-3 w-100 w-md-50">
                <img
                  src={image}
                  alt="Retro T-shirt"
                  style={{ width: "80px", height: "auto", borderRadius: "6px" }}
                />
                <div>
                  <p className="mb-1 fw-semibold">
                    Men's Retro Crew Neck T shirt
                  </p>
                  <p className="mb-1  fw-bold">
                    ₹999 <del className="text-muted fw-normal ms-2">₹1099</del>
                  </p>
                  <p className="mb-1 small">SIZE: S</p>
                  <p className="mb-0 small">COLOR: GREY</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div
                className="d-flex align-items-center border px-2 py-1 rounded"
                style={{ marginRight: "400px" }}
              >
                <button className="btn p-1">+</button>
                <span className="px-2">1</span>
                <button className="btn p-1">-</button>
                <MdDelete className="ms-2 text-danger" role="button" />
              </div>

              {/* Total */}
              <div className="w-md-25 text-md-end">
                <p className="fw-bold mb-0">₹999.00</p>
              </div>
            </div>

            {/* Summary Section */}
            <div className="d-flex flex-column align-items-end mt-4">
              <p className="fw-bold">
                Estimated total <span className="ms-2">₹999.00</span>
              </p>
              <p className="text-muted small">
                Taxes included. Discounts and shipping calculated at checkout
              </p>
              <button
                style={{
                  backgroundColor: "#50311D",
                  color: "white",
                  padding: "10px 30px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
