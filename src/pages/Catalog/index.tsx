import CarCard from 'components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="wrapper-catalog">
      <div className="container-busca">
        <form>
          <div className="input-group flex-nowrap search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua busca"
              aria-label="Digite sua busca"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button type="button" className="btn btn-primary search-btn">
            BUSCAR
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
