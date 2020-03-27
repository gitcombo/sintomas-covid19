const express     = require('express');
const app         = express();
const sintomasRoutes = require('./api/sintomas-routes');

app.use('/sintomas', sintomasRoutes);

// Manejador de errores
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