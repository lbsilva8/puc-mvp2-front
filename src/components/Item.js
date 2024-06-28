/* Componete item da lista de planta */
import { Link } from 'react-router-dom';

export default function Item(props) {
  const planta = props.planta;

  return (
    <article className="planta">
      <img src={planta.image} alt="planta" />
      <Link
        to={`/plantas/${planta.id}`}
        state={{ itens: planta }}
        className="nome-planta"
      >
        <p>{planta.nome}</p>
      </Link>
      <span>
        <strong>CATEGORIA:</strong> {planta.categoria}
      </span>
      <span>
        <strong>PLANTIO:</strong> {planta.plantio}
      </span>
      <span>
        <strong>COLHEITA:</strong> {planta.colheita}
      </span>

      <Link to={`/plantas/${planta.id}`} state={{ itens: planta }}>
        <button className="saiba-mais">Saiba Mais</button>
      </Link>
    </article>
  );
}
