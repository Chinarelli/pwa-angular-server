const express = require('express');
const codyParser = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const { salvarSeguros, listarSeguros } = require('./seguro-service');
const webpush = require('web-push');

const vapidKeys = {
    publicKey: 'BH0uI4fe_ByTm1YLOCD54z8IqYJFtUp8UkUVOnbmO-MPLqkaC9gytcCbDGDWka-UB7YM6O4Z2JCUDem2AMynW3M',
    privateKey: 'VnN3g5HQGUj9nMuv917umqARrWuW4XP14V0dCwCneSs'
}

webpush.setVapidDetails(
    'mailto:teste@gmail.com', 
    vapidKeys.publicKey, 
    vapidKeys.privateKey
)

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/seguros').post(salvarSeguros);
app.route('/api/seguros').get(listarSeguros);

const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Servidor exec on http://${HOST}:${PORT}`);
})