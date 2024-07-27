const { Router } = require('express');
const dogsRoutes = require('./dogs.Routes')
const temperamentsRoutes = require('./temperaments.Routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/doglist',dogsRoutes)

router.use('/temperaments',temperamentsRoutes)

module.exports = router;
