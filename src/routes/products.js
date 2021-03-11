import express from 'express';

const productRoute = new express.Router();

productRoute.get('/', (req, res) => {
  res.json({ username: 'Flavio' });
});
productRoute.get('/todos', (req, res) => { res.send('bievenido a mi pagina web'); }); // welcome
productRoute.get('/categoria', (req, res) => { res.send('estos los son productos disponibles'); }); // products  [categoria,buscador]
productRoute.get('/:id', (req, res) => { res.send('tu producto es este'); }); // products  [categoria,buscador]
export default productRoute;
