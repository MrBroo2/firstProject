import "./App.css";
import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import Section from "./sections/Section";

export default function App() {
  return (
    <div style={{ background: "#002547" }}>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}
