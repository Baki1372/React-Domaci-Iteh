import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import {useEffect} from 'react'

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

        </div>
    )
}

export default Home;