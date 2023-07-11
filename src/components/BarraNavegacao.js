import { Link } from "react-router-dom"

export default function BarraNavegacao() {
    return (
            <header>
                <div className='usuario'>
                    <span>Usuário</span>
                </div>
                <div className="barra-navegacao">
                    <ul className="menu">
                        <li className="item">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="item">
                            <Link to="/plantas">PLANTAS</Link>
                        </li>
                        <li className="item">
                            <Link to="/calendarioplantacao">CALENDARIO</Link>
                        </li>
                    </ul>
                </div>
            </header>
    )
}