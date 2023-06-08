import { BrowserRouter, Link } from 'react-router-dom';
import './Info.css';

function Info() {
  return (
    <section className='info p-5'>
      <div className="container-fluid p-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12 col-lg-10 slider-image">
              <div id="help-slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-block">
                      <small>Sed ut perspiciatis</small><br />
                      <h3>Nemo Enim</h3>
                      <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-block">
                      <small>Sed ut perspiciatis</small><br />
                      <h3>Nemo Enim</h3>
                      <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-block">
                      <small>Sed ut perspiciatis</small><br />
                      <h3>Nemo Enim</h3>
                      <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-controls">
                  <a type="button" data-bs-target="#help-slider" data-bs-slide="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                  </a>
                  <a type="button" data-bs-target="#help-slider" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
