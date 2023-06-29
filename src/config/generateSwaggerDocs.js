const swaggerSpec = require('./swagger')

const fs = require('fs')
const { exec } = require('child_process')

const swaggerOutputPath = './swagger.json'

fs.writeFileSync(swaggerOutputPath, JSON.stringify(swaggerSpec, null, 2))

console.log('Documentação do Swagger gerada com sucesso em ' + swaggerOutputPath)

// Função para abrir o arquivo de documentação no navegador
function openSwaggerDocs() {
  const swaggerDocsPath = './swagger-docs/index.html'

  // Verificar o sistema operacional atual
  const isWindows = process.platform === 'win32'

  // Comando para abrir o arquivo de documentação no navegador
  const openCommand = isWindows ? 'start' : 'xdg-open'

  // Executar o comando para abrir o arquivo de documentação
  exec(`${openCommand} ${swaggerDocsPath}`, (error) => {
    if (error) {
      console.error(`Erro ao abrir a documentação do Swagger: ${error}`)
      return
    }
    console.log('Documentação do Swagger aberta no navegador.')
  })
}

openSwaggerDocs()