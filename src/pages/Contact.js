import React from 'react';
import ContactForm from '../components/ContactForm';
import Nav from "../components/Nav";


function Contact() {

   function ispisiVrednostiUFormi(imePrezime, brojTelefona, email, poruka){
        alert('Ime i prezime - ' + imePrezime + ' Broj telefona - ' + brojTelefona + ' Email - ' + email + ' Poruka - ' + poruka)
    }


    return (
        <div className="divcontact">
            <Nav />
            <h1 className="mt-4">Contact</h1>
            <ContactForm ispisiVrednost={ispisiVrednostiUFormi} />
        </div>
    )
}

export default Contact;