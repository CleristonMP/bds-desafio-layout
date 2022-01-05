import CarCatalog from 'assets/images/card-car-catalog.png';

import './styles.css';

const CarCard = () => {
  return (
    <div className="container-carros">
      <img src={CarCatalog} alt="Carro do catálogo" />
      <h2>Audi Supra TT</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <button type="button" className="btn btn-primary buy-btn">
        COMPRAR
      </button>
    </div>
  );
};

export default CarCard;
