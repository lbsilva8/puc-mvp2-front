import { Link } from "react-router-dom";

export default function Item(props) {
    const planta = props.planta

    return (
        <article className="planta">
            <img src={planta.image} alt="planta" />
            <Link to={`/plantas/${planta.id}`} state={{ itens: planta }}>
                <p className="nome-planta">{planta.nome}</p>
            </Link>
            <span><strong>Categoria:</strong> {planta.categoria}</span>
            <span><strong>Plantio: </strong> {planta.plantio}</span>
            <span><strong>Colheita:</strong>  {planta.colheita}</span>

            <Link to={`/plantas/${planta.id}`} state={{ itens: planta }}>
                <button className="saiba-mais">Saiba Mais</button>
            </Link>
            
        </article>
    );
}