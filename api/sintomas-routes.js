const analizador        = require('./sintomas')
const express           = require('express');
const router            = express.Router();


router.get('/', (req, res, next) => {

    res.status(200).json({
        message: "[sintomas] GET resource OK"
    });

});


router.get('/covid19', (req, res, next) => {
    
    res.status(200).json({
        message: "[covid19] GET resource OK"
    });

});


router.get('/covid19/:sintomas', (req, res, next) => {
    
    const sintomas = req.params.sintomas;
    res.status(200).json({
        resultado: analizador.probabilidad('covid19', sintomas)
    });

});


router.get('/influenza', (req, res, next) => {
    
    res.status(200).json({
        message: "[influenza] GET resource OK"
    });

});


router.get('/influenza/:sintomas', (req, res, next) => {
    
    const sintomas = req.params.sintomas;
    res.status(200).json({
        resultado: analizador.probabilidad('influenza', sintomas)
    });

});


router.get('/gripe', (req, res, next) => {
    
    res.status(200).json({
        message: "[gripe] GET resource OK"
    });

});


router.get('/gripe/:sintomas', (req, res, next) => {
    
    const sintomas = req.params.sintomas;
    res.status(200).json({
        resultado: analizador.probabilidad('gripe', sintomas)
    });

});


router.get('/:sintomas', (req, res, next) => {
    
    const sintomas = req.params.sintomas;    
    res.status(200).json({
        resultado: analizador.obtenerResultados(sintomas)
    });

});

module.exports = router;