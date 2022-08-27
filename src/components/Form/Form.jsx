import React from 'react';
import Boton from '../Boton/Boton';
import password from '../../utils/Password';

const Form = ({boton}) => {
    password("pepito")
    return (
        <>
        <form className="d-flex">
            <input className="form-control me-sm-2" type="text" palceholder="Hola"></input>
            {boton}
        </form>            
        </>
    );
}

export default Form;
