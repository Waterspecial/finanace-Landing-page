import React  from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Section from "./components/Section";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Newsletter />
      <Subscription />
      <Footer />
    </div>
  ); 
}

export default App;
