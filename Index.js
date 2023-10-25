const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const dbUrl = 'mongodb://127.0.0.1:27017/ToDoDB';

const {taskRout} = require('./routes/routes');

const app = express();

app.use(express.json());

mongoose.connect(dbUrl, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('Connexion à MongoDB établie'))
    .catch(()=> console.error('Erreur de connexion à MongoDB :', error));
  
app.use("/api/tasks",taskRout);
  
app.listen(3000, () => {
    console.log('Serveur Express en cours d\'exécution sur le port 3000');
}); 
