import './styles.css';

import CarImg from 'assets/images/car.png';

const Home = () => {
  return (
    <div className="wrapper-home">
      <div className="home-card">
        <div className="image-container">
          <img src={CarImg} alt="Carro principal" />
        </div>

        <div className="home-content">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary">
          <h6>VER CATÁLOGO</h6>
        </button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
