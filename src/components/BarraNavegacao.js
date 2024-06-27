/* Componete barra de navegação */
import { Link } from 'react-router-dom';

export default function BarraNavegacao() {
  return (
    <header>
      <div className="barra-navegacao">
        <ul className="menu">
          <li className="item">
            <Link to="/">HOME</Link>
          </li>
          <li className="item">
            <Link to="/plantas">PLANTAS</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
