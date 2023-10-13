const express = require('express')
const exphbs = require('express-handlebars')
const { request } = require('http')
const PORT = 3333
const mysql = require('mysql2')
//Importar o módulo conn para as operações com o banco

const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'aluno_medio',
  password: '@lunoSenai23.',
  database: 'system_produto',
})

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos

app.post('/cadastrar', (request, response)=>
{
  
})

app.get('/', (request, response)=>{
  return response.render('home')
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

