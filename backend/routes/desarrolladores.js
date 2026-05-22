const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      nombre: 'Johan Masmela',
      rol: 'Frontend Developer',
      foto: 'url_de_foto',
      celular: 'tu_celular'
    },
    {
      nombre: 'Stiven Zamudio',
      rol: 'Backend Developer',
      foto: 'url_de_foto',
      celular: 'celular_stiven'
    }
  ]);
});

module.exports = router;