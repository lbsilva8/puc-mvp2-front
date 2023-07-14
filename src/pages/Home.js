import banner from '../assets/banner.png'

export default function Home() {
    return (
            <div className='parte1'>
                <section className="pagina-inicial">
                    <div className="jardim-esquerda">
                        <div className="jardim-parte1E">
                            <h1>Meu Jardim</h1>
                            <h2>Virtual</h2>
                        </div>
                        <div className="jardim-parte2E">
                            <p>
                            Esse é um projeto criado por alguém que cresceu na fazenda e é apaixonada por tecnlogia. Meu jardim virtual foi pensado para pessoas como eu, que gosta de plantas, mas se perde na hora de escolher o momento certo de plantar e colher. 
                            </p><p>
                            A ideia aqui é trazer informação, temos uma lista de plantas e informações detalhadas sobre elas, além disso, estamos criando o nosso jardim onde o usuário poderá adicionar as plantas que já tem e acompanhar o ciclo de vida e o calendário com as fases de cada plantinha.
                            </p><p> 
                                Fique livre para explorar e aguarde nossos lançamentos. 
                            </p>
                        </div>
                    </div>
                    <div className="jardim-direita">
                        <img src={banner} alt="banner principal"/>
                    </div>
                </section>
            </div>
    )
}