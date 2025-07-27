import React from "react";
import NavBar from "./NavBar"; // Import without curly braces for default export
import Home from "./Home";     // Import without curly braces for default export
import About from "./About";   // Import without curly braces for default export

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
