import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setName } from "./redux/slice";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    dispatch(setName({ name: value }));
    navigate("/menu");
    setValue("");
  }
  return (
    <section className="home-section">
      <p className="home-intro-heading">The best pizza.</p>
      <h1 className="home-intro-description">
        Straight out of the oven, straight to you.
      </h1>

      <p className="welcome-text">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form onSubmit={submitForm} className="name-form">
        <input
          className="input-name"
          placeholder="Your full name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={`${value.length === 0 ? "hidden" : "order-btn"}`}>
          Start Ordering
        </button>
      </form>
    </section>
  );
}

export default Home;
