import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header
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
