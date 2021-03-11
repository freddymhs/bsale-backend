import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => { res.send('bievenido a mi pagina web'); }); // welcome
router.get('/products', (req, res) => { res.send('estos los son productos disponibles'); }); // products  [categoria,buscador]
router.get('/products/:id', (req, res) => { res.send('tu producto es este'); }); // products  [categoria,buscador]

export default router;
