import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import outros from '../assets/images/outros.svg';
import ultilidades from '../assets/images/utilidades.svg';
import { IconeTema } from './UI'

export default (type) =>{
    const Images = {
        Alimentação: <IconeTema src={alimentacao} alt="Alimentação" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Utilidades: <IconeTema src={ultilidades} alt="Utilidades" />,
        default: <IconeTema src={outros} alt="Outros"  />,    
    };

    return Images[type] || Images.default;
};