const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database conectado!'))
    .catch(err => console.log('Erro:' + err));

app.set('json spaces', 4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/', index);
app.use('/clientes', clientes);

app.listen(PORT, () => console.log("Escutando na porta " + PORT));


