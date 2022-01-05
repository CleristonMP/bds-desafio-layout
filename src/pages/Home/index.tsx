import './styles.css';

import CarImg from 'assets/images/car.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="wrapper-home container">
      <div className="home-card row">
        <div className="image-container col-xl-6">
          <img src={CarImg} alt="Carro principal" />
        </div>

        <div className="home-content col-xl-6">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/catalog">
          <button className="btn btn-primary">
            <h6>VER CATÁLOGO</h6>
          </button>
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
