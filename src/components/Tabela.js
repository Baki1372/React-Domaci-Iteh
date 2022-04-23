import React from 'react'

function Tabela(props){

const slikari = props.slikari


const tabela = 
<table id='tabela-slikari' className='table table-bordered table-hover'>
<thead>
    <tr>
        <th>Ime</th>
        <th>Prezime</th>
        <th>Godine</th>
        <th>Broj telefona</th>
    </tr>
</thead>
<tbody>
    {slikari.map(slikar => {
        return (
            <tr key={slikar.id}>
                <td>{slikar.ime}</td>
                <td>{slikar.prezime}</td>
                <td>{slikar.godine}</td>
                <td>{slikar.brojTelefona}</td>
            </tr>
        );
    })}
</tbody>
</table>




return (
    <div className="tabela">
        {tabela}
    </div>
    )

}

export default Tabela;