import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
