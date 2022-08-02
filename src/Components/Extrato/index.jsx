import React from 'react';
import { Box, Button } from '../UI';
import { extratoLista } from '../../info';
import Itens from '../Itens';



const Extrato = () =>{
    return(
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) =>{
                return(
                    <Itens key={id} type={type} value={value} date={date} from={from} />
                )
            })}
            <Button>Ver mais</Button>
        </Box>
        
    )
}

export default Extrato;