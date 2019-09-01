import React, { Component } from "react";
import "./contact.scss";
import { Link } from "gatsby"
import Button from "../button/button"



class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            note: '',
            termsConfirmation: false,
            errors: {},
            succesMsg: ''
        }
    }

    handleInputChange = e => {
        let errors = {};
    
        if (e.target.name === 'phone') {
          let phone = /^(\+|\d)\d+$/
          if (!phone.test(e.target.value))
            errors.phone = 'Digits only.'
          this.setState({ errors })
        }
        if (e.target.name === 'email') {
          let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (!email.test(e.target.value) && (e.target.value.length !== 0))
            errors.email = 'Wrong email address'
          this.setState({ errors })
        }
    
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.note]: e.target.value
    
         })
      }

      onFormSubmit = e => {

        const { name, email, note, phone, termsConfirmation } = this.state
        let errors = {}
        // alert([this.state.name, this.state.email,this.state.phone, this.state.note])
        e.preventDefault();
    
        if (name === '') { errors.name = 'This field is required.' }
    
        if (email === '') { errors.email = 'This field is required.' }
    
        if (phone === '') { errors.phone = 'This field is required.' }
        if (phone.length < 9) { errors.phone = 'Number is too short.' }
        if (termsConfirmation === false) { errors.termsConfirmation = 'This field is required' }
    
    
        this.setState({ errors })
    
        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
          const data = {
            'name': this.state.name,
            'email': this.state.email,
            'phoneNumber': this.state.phone,
            'note': this.state.note,
            'termsConfirmation': this.state.termsConfirmation
          }
    

        }
      }

    render() {
        const { errors } = this.state

        return (
            <div className={`contact ${this.props.type}`} id="kontakt">
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <div className="separator"></div>
                    <p>{this.props.content}</p>
                </div>
                <div className="contact-container">
                    <div className="form-container">
                        <form autoComplete="off" className="form" id="form" onSubmit = {this.onFormSubmit}>
                            <input type='text' value={this.state.name} onChange={this.handleInputChange} placeholder="Imię i nazwisko" name="name" id="name" maxLength='30' />
                            {errors && <div className='error-message'>{errors.name}</div>}
                            <input type='email' value={this.state.email} onChange={this.handleInputChange} placeholder="Email:" name="email" id="email" maxLength='50' />
                            {errors && <div className='error-message'>{errors.email}</div>}
                            <input value={this.state.phone} onChange={this.handleInputChange} placeholder="Telefon" name="phone" id="phone" maxLength='12' />
                            {errors && <div className='error-message'>{errors.phone}</div>}

                            <textarea placeholder="Wiadomość" value={this.state.note} onChange={this.handleInputChange} name="note" id="note" maxLength='500' />

                            <input type="submit" className="btn" value = "wyślij"/>

                        </form>
                    </div>
                    <div className="adress-container">
                        <h5>DANE KONTAKTOWE</h5>
                        <p><strong>Galeria Obrazu</strong></p>
                        <p>Capicola brisket venison</p>
                        <p>NIP: xxx xxx xx xx</p>
                        <p>xxx xxx xxx | xxx xxx xxx</p>
                        <a href="mailto:xxx@xxx.xx">xxx@xxx.xx</a>

                    
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright © 2019 Galeria Obrazu</p>
                </div>
            </div>
        );

    }
}

export default Contact;
