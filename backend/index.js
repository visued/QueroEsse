const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// declaração dos models
const {Usuario, Produto, Agendamento, Comentario, Ecommerce, NLTK} = require('./models')

// criação das APIs - user
app.post('/usuarios', async (req,res) => {
    const usuarios = await Usuario.create(req.body)
    res.json(usuarios)
})
app.get('/usuarios', async (req,res) => {
    const usuarios = await Usuario.findAll({
        include: [ Agendamento ]
    })
    res.json(usuarios)
})
// criação das APIs - product
app.post('/produtos', async (req,res) => {
    const produtos = await Produto.create(req.body)
    res.json(produtos)
})
app.get('/produtos', async (req,res) => {
    const produtos = await Produto.findAll({
        include: [Comentario, NLTK]
    })
    res.json(produtos)
})
app.post('/produtos/:id', async (req,res) => {
    const produtos = await Produto.create(req.body)
    
    res.json(produtos)
})
app.get('/produtos/:id', async (req,res) => {
    const produtos = await Produto.findByPk(req.params.id, {include:[Comentario, NLTK]})

    res.json(produtos)
    })

    

// criação das APIs - pedido
app.post('/agendamentos', async (req,res) => {
    const agendamentos = await Agendamento.create(req.body)
    res.json(agendamentos)
})
app.get('/agendamentos', async (req,res) => {
    const agendamentos = await Agendamento.findAll({
        include: [ Produto ]
    })
    res.json(agendamentos)
})
app.post('/comentarios', async (req,res) => {
    const comentarios = await Comentario.create(req.body)
    res.json(comentarios)
})
app.get('/comentarios', async (req,res) => {
    const comentarios = await Comentario.findAll()
    res.json(comentarios)
})
app.post('/ecommerces', async (req,res) => {
    const ecommerces = await Ecommerce.create(req.body)
    res.json(ecommerces)
})
app.get('/ecommerces', async (req,res) => {
    const ecommerces = await Ecommerce.findAll()
    res.json(ecommerces)
})
app.post('/ntlk', async (req,res) => {
    const ntlk = await NLTK.create(req.body)
    res.json(ntlk)
})
app.get('/ntlk', async (req,res) => {
    const ntlk = await NLTK.findAll()
    res.json(ntlk)
})
app.listen(3001)