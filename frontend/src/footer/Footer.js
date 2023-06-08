import { BrowserRouter, Link } from 'react-router-dom';
import './Footer.css';
import fLogo from '../assets/images/footer-logo.png';

function Footer() {
  return (
    <section className='footer p-4'>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    2023 © All rights reserved.
                </div>
                <div className="col-md-6 text-right">
                    <img src={fLogo}/>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Footer;