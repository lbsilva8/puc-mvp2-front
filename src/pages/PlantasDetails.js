import { useLocation, useNavigate, useParams } from 'react-router';

export default function PlantasDetails() {
  let { state } = useLocation();
  console.log(useLocation());
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="detalhes-plantas">
      <div>
        <button className="back" onClick={() => navigate('/plantas')}>
          Voltar
        </button>
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
