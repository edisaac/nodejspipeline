var express = require('express');
var app = express();

// Ruta principal
app.get('/', function (req, res) {
  // Obtener las variables de entorno
  var keycloakUrl = process.env.KEYCLOAK_URL || 'No definido';
  var keycloakRealm = process.env.KEYCLOAK_REALM || 'No definido';
  var keycloakClientId = process.env.KEYCLOAK_CLIENT_ID || 'No definido';
  var apiUrl = process.env.API_URL || 'No definido';

  // Crear un string con las variables de entorno
  var envVariables = `
    KEYCLOAK_URL>>>>: ${keycloakUrl}<<<<
    KEYCLOAK_REALM: ${keycloakRealm}
    KEYCLOAK_CLIENT_ID: ${keycloakClientId}
    API_URL: ${apiUrl}
  `;

  // Enviar las variables de entorno como respuesta
  res.send(envVariables);
});
// Ruta de healthcheck
app.get('/health', function (req, res) {
  res.sendStatus(200); // Devuelve un estado 200 OK
});

// Inicia el servidor
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuchando en http://%s:%s', host, port);
});
