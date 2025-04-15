import { Link } from "react-router-dom";
import "./Layout.css";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          EduPlay
        </Link>

        <div className="nav-links">
          <Link to="/listar">Actividades</Link>
          <Link to="/conecta">Generar</Link>
        </div>

        <div className="user-info">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
          <span>Maestro</span>
        </div>
      </nav>
    </header>
  );
}




