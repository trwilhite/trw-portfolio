import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Project></Project>
        <ContactForm></ContactForm>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
