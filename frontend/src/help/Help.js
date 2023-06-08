import { BrowserRouter, Link } from 'react-router-dom';
import './Help.css';

function Help() {
  return (
    <section className='help'>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <h3>We Help Businesses<br /><span>Grow and Innovate</span></h3>
              <p className="pt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
