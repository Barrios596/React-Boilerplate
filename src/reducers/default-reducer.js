import {data} from '../actions';

export default (estado = {}, accion) => {
    switch(accion.type){
        case data:
            return accion.payload;
        default:
            return estado;
    }
}