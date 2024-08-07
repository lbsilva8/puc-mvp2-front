/* Página com a llstagem de plantas e caracteristicas */
import { useEffect, useState } from 'react';
import Item from '../components/Item';

import plantas from '../plantas.json';

export default function Plantas() {
  const [plantaList, setPlantasList] = useState([]);
  useEffect(() => {
    setPlantasList(plantas.plantas);
  }, []);

  return (
    <div className="detalhes-usuario">
      <section className="lista-plantas">
        {plantaList.map((itens, index) => (
          <Item key={index} planta={itens} />
        ))}
      </section>
    </div>
  );
}
