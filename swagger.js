const swaggerAutogen = require('swagger-autogen') ({ openapi: '3.1.0'})

const doc = {
    info: {
        title: 'Fatec Api',
        version: '1.0.0',
        description: 'API for managing projects and users',
    },
    servers: [{ url: 'http://localhost:3000' }],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./');
});