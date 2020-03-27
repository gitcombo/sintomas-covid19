/* Sintomas Coronavirus 
    [fiebre, fatiga, tos, estornudos, dolores, mucosidad, garganta, diarrea, cabeza, respiracion] 0% - 100%
    p.e.: [1, 0.2334, 0.49, 1, 0.782, 1, 0, 0, 0.43345, 1] 
*/


const calcular_probabilidad = function ( sintomas, pesos ) {
    resultado = 0;
    for (i = 0; i<10; i++) { resultado = resultado + ( sintomas[i] * pesos[i]) }
    return resultado; 
}


const probabilidad_gripe = function (sintomas) {    
    pesos = [0.30, 0.60, 0.60, 1, 1, 1, 1, 0, 0.30, 0];
    return calcular_probabilidad(sintomas, pesos);
}


const probabilidad_influenza = function (sintomas) {
    pesos = [1, 1, 1, 0, 1, 0.60, 0.60, 0.60, 1, 0];
    return calcular_probabilidad(sintomas, pesos);
}


const probabilidad_covid19 = function (sintomas) {
    pesos = [1, 0.60, 1, 0, 0.60, 0.30, 0.60, 0.30, 0.60, 0.60];
    return calcular_probabilidad(sintomas, pesos);
}


const probabilidad = function ( enfermedad, cuadroSintomas ) {
    sintomas = cuadroSintomas.substr(1, cuadroSintomas.length -2).split(",");
    if ( enfermedad == "covid19" )         { return probabilidad_covid19(sintomas) }
    else if ( enfermedad == 'influenza' )  { return probabilidad_influenza(sintomas) }
    else if ( enfermedad == 'gripe' )      { return probabilidad_gripe(sintomas) }
}


const obtenerResultados = function ( cuadroSintomas ) {
    
    resultados = {
        coronavirus:    probabilidad( 'covid19', cuadroSintomas),
        influenza:      probabilidad( 'influenza', cuadroSintomas),
        gripe:          probabilidad( 'gripe', cuadroSintomas)
    }

    return resultados;
}

module.exports = {obtenerResultados, probabilidad}