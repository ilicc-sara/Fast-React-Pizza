import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "@/redux/slice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { toggleLoading } from "../redux/loadingSlice";
//

function Home() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.name);
  //
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  //
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
      <button onClick={() => dispatch(toggleLoading({ isLoading: true }))}>
        toggle loading
      </button>

      {name.name === "" && (
        <p className="welcome-text">
          👋 Welcome! Please start by telling us your name:
        </p>
      )}

      {name.name === "" && (
        <form onSubmit={submitForm} className="name-form">
          <input
            className="input-name"
            placeholder="Your full name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className={`btn ${value.length === 0 ? "hidden" : "start-btn"}`}
          >
            Start Ordering
          </button>
        </form>
      )}

      {name.name !== "" && (
        <Link to="/menu">
          <button className="btn start-btn">
            Continue Ordering, {name.name}
          </button>
        </Link>
      )}
    </section>
  );
}

export default Home;
