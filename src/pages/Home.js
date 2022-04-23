import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import {useEffect} from 'react'
import Tabela from '../components/Tabela';

function Home(){

    const [slikari, setSlikari] = useState([]);

    function vratiSlikare(){

        axios.get('http://localhost:8000/api/slikar').then(response => {
          setSlikari(response.data.data);
        });

    }


    return (
        <div className="home">
            <h1 className="mt-4">ITEH - REACT</h1>
            <button onClick={vratiSlikare} className="btn btn-primary btn-lg mt-5">Prikaži slikare</button>
                <Tabela slikari={slikari} />
        </div>
    )
}

export default Home;