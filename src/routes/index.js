import express from 'express';

const indexRoute = new express.Router();

indexRoute.get('/', (req, res) => { res.send('bievenido a mi pagina web'); }); // welcome

export default indexRoute;
