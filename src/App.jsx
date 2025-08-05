import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { setName } from "./redux/slice";
import { useSelector } from "react-redux";

function App() {
  const [value, setValue] = useState("");
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  function submitForm(e) {
    e.preventDefault();
    dispatch(setName({ name: value }));
    setValue("");
  }

  console.log(name);

  const url = `https://react-fast-pizza-api.onrender.com/api/menu`;

  return (
    <>
      <nav>
        <p>Fast react pizza co.</p>
        <form>
          <input className="input-code" placeholder="Search order #" />
          <button className="hidden">Submit</button>
        </form>
        <p className={`${name.name === "" ? "hidden" : ""}`}>
          {" "}
          {name.name.toUpperCase()}{" "}
        </p>
      </nav>

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
    </>
  );
}

export default App;
