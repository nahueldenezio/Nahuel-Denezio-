import { React } from "react";
import { GitHub, Home, Person } from '@mui/icons-material';
import '../styles/Header.css';

export default function Header({ onClickHome }) {
  const iconSize = 2.5;

  const handleHomeClick = () => {
    onClickHome();
  };

  const handlePersonClick = () => {
    const element = document.getElementById('contact');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="header">
      <ul className="header-nav">
        <li>
          <a href="#" onClick={handleHomeClick}>
            <Home style={{ fontSize: `${iconSize}em` }} />
          </a>
        </li>
        <li>
          <a href="https://github.com/nahueldenezio">
            <GitHub style={{ fontSize: `${iconSize}em` }} />
          </a>
        </li>
        <li>
          <a href="#" onClick={handlePersonClick}>
            <Person style={{ fontSize: `${iconSize}em` }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}