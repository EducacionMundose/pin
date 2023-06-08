import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/scss/bootstrap.scss'
import logo from './assets/images/top-logo.png'

function App() {
  return (
    <section className='front'>
      <nav className="navbar navbar-expand-lg">
        <div className="container container-fluid">
          <a className="navbar-brand"><img src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav w-100 justify-content-end">
              <a className="nav-link">Home</a>
              <a className="nav-link">About</a>
              <a className="nav-link">Products</a>
              <a className="nav-link">Services</a>
              <a className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="front-slider" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#front-slider" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#front-slider" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#front-slider" data-bs-slide-to="2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block">
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error <br/>sit voluptatem accusantium doloremque.</p>
                    <button className="btn-primary btn-readm" type="button">Read more</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block">
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error <br/>sit voluptatem accusantium doloremque.</p>
                    <button className="btn-primary btn-readm" type="button">Read more</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block">
                    <h1>Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error <br/>sit voluptatem accusantium doloremque.</p>
                    <button className="btn-primary btn-readm" type="button">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
