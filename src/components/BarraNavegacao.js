import { Link } from "react-router-dom"

export default function BarraNavegacao() {
    return (
        <div className='detalhes-usuario'>
            <header>
                <div className='usuario'>
                    <span>Usuário</span>
                </div>
                <div className="barra-navegacao">
                    <ul className="menu">
                        <li className="item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="item">
                            <Link to="/plantas">Plantas</Link>
                        </li>
                        <li className="item">
                            <Link to="/calendarioplantacao">Calendario</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}