const { Router } = require('express');

const router = Router();

const ContactControlloer = require('./app/controllers/ContactController');
const CategoryControlloer = require('./app/controllers/CategoryController');

router.get('/contacts', ContactControlloer.index);
router.get('/contacts/:id', ContactControlloer.show);
router.delete('/contacts/:id', ContactControlloer.delete);
router.post('/contacts', ContactControlloer.store);
router.put('/contacts/:id', ContactControlloer.update);

router.get('/categories', CategoryControlloer.index);
router.post('/categories', CategoryControlloer.store);

module.exports = router;
