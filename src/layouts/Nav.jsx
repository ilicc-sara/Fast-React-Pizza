import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../redux/loadingSlice";

function Nav() {
  const name = useSelector((state) => state.name);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    dispatch(toggleLoading({ isLoading: true }));
    if (value === "") return;
    navigate(`/order/${value}`);
    setValue("");
  }

  return (
    <nav>
      <p>Fast react pizza co.</p>
      <form onSubmit={submitForm}>
        <input
          className="input-code"
          placeholder="Search order #"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="hidden">Submit</button>
      </form>
      <p className={`${name.name === "" ? "hidden" : ""}`}>
        {" "}
        {name.name.toUpperCase()}{" "}
      </p>
    </nav>
  );
}

export default Nav;
