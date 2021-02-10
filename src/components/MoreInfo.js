import React from 'react';
import useUser from '../hooks/useUser';

const MoreInfo = () => {

    // llamamos el hook
    const {name, years} = useUser();
    console.log(name)

    return (
        <div>
            <h1>Informacion del usuario</h1>
            <p>Nombre: { name }</p>
            <p>Edad: { years }</p>
        </div>
    );
};

export default MoreInfo;
