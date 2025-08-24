import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "@/redux/slice";
import { nameIsDefined } from "../redux/slice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleLoading } from "../redux/loadingSlice";
import Button from "../components/Button";
import Input from "../components/Input";

function Home() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.name.name);
  const nameDefined = useSelector((state) => nameIsDefined(state.name));
  const loading = useSelector((state) => state.loading.isLoading);

  function submitForm(e) {
    e.preventDefault();
    dispatch(toggleLoading({ isLoading: true }));
    dispatch(setName({ name: value }));
    navigate("/menu");
    setValue("");
  }
  return (
    <section className="home-section">
      {loading && <div className="loader"></div>}
      <p className="home-intro-heading">The best pizza.</p>
      <h1 className="home-intro-description">
        Straight out of the oven, straight to you.
      </h1>

      {!nameDefined && (
        <p className="welcome-text">
          👋 Welcome! Please start by telling us your name:
        </p>
      )}

      {!nameDefined && (
        <form onSubmit={submitForm} className="name-form">
          <Input
            className="input-name"
            placeholder="Your full name"
            value={value}
            handleInputChange={(e) => setValue(e.target.value)}
          />

          <Button variation="home button" value={value} type="submit">
            Start Ordering
          </Button>
        </form>
      )}

      {nameDefined && (
        <Link to="/menu">
          <Button variation="home button continue" type="button">
            Continue Ordering, {name}
          </Button>
        </Link>
      )}
    </section>
  );
}

export default Home;
