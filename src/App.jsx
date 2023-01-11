import HeroSection from "./HeroSection";
import Course from "./course";
import Features from "./features";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <HeroSection />
      <Course />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
