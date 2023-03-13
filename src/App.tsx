import React from "react";
import { Creations } from "./components/About/Creations/Creations";
import { AboutHeader } from "./components/About/Header/AboutHeader";
import { Landing } from "./components/Landing/Landing";
import { About } from "./layouts/About";

function App() {
  const links: HTMLAnchorElement[] = Array.from(
    document.querySelectorAll(".fakeLinks a")
  );

  links.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  return (
    <div className="App">
      <Landing />
      <About>
        <AboutHeader />
        <Creations />
      </About>
    </div>
  );
}

export default App;
