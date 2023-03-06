const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();


const {
  PORT
} = process.env 

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(8080, () => {
    console.log(`Abrimos el puerto at ${8080}`); // eslint-disable-line no-console
  });
});
