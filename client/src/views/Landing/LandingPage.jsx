import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/733/718/desktop-wallpaper-f1-ultra-formula-1.jpg" 
        alt="Imagen Formula 1" />
        <Link to={"/home"}>
        <button>Ingresar</button>
        </Link>
    </div>
  );
};

export default LandingPage;
