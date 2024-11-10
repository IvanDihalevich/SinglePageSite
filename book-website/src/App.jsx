import logo from "./harryPotterLogo.svg";
import React from "react";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <main>
        <BookDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
