import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <>
      <nav>
        <p>Fast react pizza co.</p>
        <form>
          <input className="input-code" placeholder="Search order #" />
          <button className="hidden">Submit</button>
        </form>
      </nav>

      <section className="home-section">
        <p className="home-intro-heading">The best pizza.</p>
        <h1 className="home-intro-description">
          Straight out of the oven, straight to you.
        </h1>

        <p className="welcome-text">
          👋 Welcome! Please start by telling us your name:
        </p>
        <form>
          <input
            className="input-name"
            placeholder="Your full name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="hidden">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
