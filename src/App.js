import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        Weather App
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Samitola/portfolio-project"
            target="_blank"
          >
            Sami Mogaji
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Samitola/react-weather-app"
            target="_blank"
          >
            open sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
