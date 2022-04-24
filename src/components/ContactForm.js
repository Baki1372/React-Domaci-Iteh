import React from 'react'
import { useState } from 'react'

function ContactForm(props) {

    const [imePrezime, setImePrezime] = useState('');
    const [brojTelefona, setBrojTelefona] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');

    function handleImePrezime(e) {
        setImePrezime(e.target.value)
    }

    function handleBrojTelefona(e) {
        setBrojTelefona(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePoruka(e) {
        setPoruka(e.target.value)
    }


    return (
        <div className="contactform">
            <div className="forma">
                <div className="element">
                    <label>Ime i prezime: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={imePrezime} onChange={handleImePrezime} />
                </div>
                <div className="element">
                    <label>Broj telefona: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={brojTelefona} onChange={handleBrojTelefona} />
                </div>
                <div className="element">
                    <label>Email: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={email} onChange={handleEmail} />
                </div>
                <div className="element">
                    <label>Poruka: </label>
                    <textarea className="form-control mt-2 mb-2" value={poruka} onChange={handlePoruka} />
                </div>
                <button type="button" onClick={() => props.ispisiVrednost(imePrezime, brojTelefona, email, poruka)} className="btn btn-primary btn-lg" >Pošalji poruku</button>
                </div>
        </div >
    );
}

export default ContactForm
