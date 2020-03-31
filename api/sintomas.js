/* Sintomas Coronavirus 
   --------------------
    respiracion
    fiebre
    tos
    cuerpo
    mocos
    estornudos
    garganta

    [respiracion, fiebre, tos, cuerpo, mocos, estornudos, garganta]
    [1, 0, 1, 0, 1, 1, 0]
*/

const funcion_activacion = function ( z ) {
    resultado = [0, 0, 0];
    if      ( z == 0 )            resultado = [   0,    0,    0]
    else if ( z > 0 && z <= 4 )   resultado = [   0,    0, 0.88]
    else if ( z > 4 && z <= 14 )  resultado = [   0, 0.45, 0.92]
    else if ( z > 14 && z <= 30 ) resultado = [   0, 0.20, 0.70]
    else if ( z > 30 && z <= 34 ) resultado = [   0, 0.40, 0.95]
    else if ( z > 34 && z <= 49 ) resultado = [0.20, 0.95, 0.85]
    else if ( z > 49 && z <= 55 ) resultado = [0.85, 0.60,    0]
    else if ( z > 55  )           resultado = [0.95, 0.78, 0.20]
    else                          resultado = [-1,-1,-1];
    return resultado;
}


const calcular_probabilidad = function ( sintomas, pesos ) {
    resultado = 0;
    for ( i = 0; i < sintomas.length -1; i++ ) resultado = resultado + ( Math.ceil(sintomas[i]) * pesos[i] );
    return funcion_activacion(resultado); 
}


const probabilidad_gripe = function (sintomas) {    
    pesos = [51, 30, 10, 1, 1, 1, 1];
    return calcular_probabilidad(sintomas, pesos)[2];
}


const probabilidad_influenza = function (sintomas) {
    pesos = [51, 30, 10, 1, 1, 1, 1];
    return calcular_probabilidad(sintomas, pesos)[1];
}


const probabilidad_covid19 = function (sintomas) {
    pesos = [51, 30, 10, 1, 1, 1, 1];
    return calcular_probabilidad(sintomas, pesos)[0];
}


const probabilidad = function ( enfermedad, cuadroSintomas ) {
    sintomas = cuadroSintomas.substr(1, cuadroSintomas.length -2).split(",");
    if      ( enfermedad == "covid19" )    { return probabilidad_covid19(sintomas) }
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