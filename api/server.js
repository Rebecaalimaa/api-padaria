require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('../swagger.json');
const routes = require('../src/router');
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routes);

app.listen(port, (req,res) =>{
    console.log('API respondendo em http://localhost:'+port);
});