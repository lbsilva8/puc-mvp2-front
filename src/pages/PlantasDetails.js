/* Página com os detalhes da planta selecionada */
import { useLocation } from 'react-router';

export default function PlantasDetails() {
  let { state } = useLocation();
  console.log(useLocation());

  return (
    <div className="detalhes-plantas">
      <div>
        <div>
          <img className="detalhes-image" src={state.itens.image} alt="" />
        </div>
        <div>
          <h2>{state.itens.nome}</h2>
          <p>{state.itens.descrição}</p>
        </div>
      </div>
    </div>
  );
}
