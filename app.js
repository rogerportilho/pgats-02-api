const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const authController = require('./controller/authController');
const userController = require('./controller/userController');
const transferController = require('./controller/transferController');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', authController);
app.use('/users', userController);
app.use('/transfer', transferController);

module.exports = app;
