export const data = 'fetch_data';

export function defaultF(){
    let vartest = 'Hola';
    return{
        type: data,
        payload: vartest
    }
}