import React, { useState } from "react";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <Page currentPage={currentPage} />
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
