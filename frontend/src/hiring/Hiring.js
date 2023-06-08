import { BrowserRouter, Link } from 'react-router-dom';
import './Hiring.css';
import contact from '../assets/images/contact-image.png';
import React from 'react';

class Hiring extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      nombre: 'Mundose',
      email: "mundose@gmail.com",
      phone:'0987',
      message: 'Hola!'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch('http://localhost:8000/api/contactus', requestOptions)
        .then(response => {alert('Se envio tu mensaje exitosamente!')})
        // .then(data => this.setState({ postId: data.id }));
    console.log(this.state);
    event.preventDefault();
  }

render() {
    return (
        <section className='hiring p-5'>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6 mb-3 mt-3">
                        <h3>Get in touch</h3>
                        <h3 className='orange'>We are hiring!</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" name="nombre" checked={this.state.nombre} onChange={this.handleInputChange} required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" name="email" checked={this.state.email} onChange={this.handleInputChange} required/>
                            </div>
                            <div className="form-group">
                                <input type="phone" className="form-control" placeholder="Phone" name="phone" checked={this.state.phone} onChange={this.handleInputChange} required/>
                            </div>
                            <div className="form-group">
                                <textarea type="text" className="form-control" placeholder="Message" name="message" checked={this.state.message} onChange={this.handleInputChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-orange mt-4">Send</button>
                        </form>
                    </div>
                    <div className="col-md-12 col-lg-6 mb-3 mt-3 img-container">
                        <img src={contact} />
                    </div>
                </div>
            </div>
        </section>
    );
}
}
export default Hiring;
