import "./styles/Header.css";
import img from "../images/header-img.png";

export default function Header() {
  return (
    <header className="container">
      <div className="header__left">
        <p>Lorem ipsum dolor</p>
        <h1>Always the real thing, always Saas</h1>
        <p>
          And that number is growing every day. That means e-commerce is
          thriving.
        </p>
        <button> Try for free</button>
        <button> Try for free</button>
      </div>
      <div className="header__right">{/* <img src={img} alt="" /> */}</div>
    </header>
  );
}
