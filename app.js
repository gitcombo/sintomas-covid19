const express     = require('express');
const app         = express();
const sintomasRoutes = require('./api/sintomas-routes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});



app.use('/sintomas', sintomasRoutes);



app.use((req, res, next) => {
    const error = new Error('Recurso no encontrado. COVID19 viene por ti.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message:    error.message
        }
    });
});

module.exports = app;