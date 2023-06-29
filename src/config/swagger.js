const swaggerJSDoc = require('swagger-jsdoc')

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nome do seu projeto',
      version: '1.0.0',
      description: 'Descrição da sua API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Substitua pela URL do seu servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Substitua pelo caminho dos seus arquivos de rotas
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

module.exports = swaggerSpec