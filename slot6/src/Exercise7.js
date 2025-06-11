import 'bootstrap/dist/css/bootstrap.min.css';
function CardsColumns() {
  return (
    <div className="container py-4">
      <h3>Cards Columns</h3>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center bg-primary text-white">
            <img
              src="/images/car.jpg"
              className="card-img-top p-3"
              alt="Car 1"
            />
            <div className="card-body bg-white text-dark">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center bg-warning text-dark">
            <img
              src="/images/car.jpg"
              className="card-img-top p-3"
              alt="Car 2"
            />
            <div className="card-body bg-white text-dark">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center bg-danger text-white">
            <img
              src="/images/car.jpg"
              className="card-img-top p-3"
              alt="Car 3"
            />
            <div className="card-body bg-white text-dark">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsColumns;