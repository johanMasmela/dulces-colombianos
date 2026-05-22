const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/productos'));
app.use('/api/desarrolladores', require('./routes/desarrolladores'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.log('❌ Error:', err));

app.listen(process.env.PORT || 5000, () => {
  console.log('🚀 Servidor corriendo en puerto 5000');
});