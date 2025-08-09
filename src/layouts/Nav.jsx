import { useSelector } from "react-redux";

function Nav() {
  const name = useSelector((state) => state.name);

  return (
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
  );
}

export default Nav;
