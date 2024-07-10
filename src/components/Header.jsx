import reactImg from "../assets/hub.png";
import './Header.css'



export default function Header() {
  

  return (
    <header>
      <img src={reactImg} alt="Stylized house" />
      <h1>Temblaze's Hub</h1>
      <p>
       Alone we can do so little; together we can do so much....
      </p>
    </header>
  );
}
