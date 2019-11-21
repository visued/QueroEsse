const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const allowCors = require('./config/cors')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(allowCors)
// declaração dos models
const {Usuario, Produto, Agendamento, Comentario, Ecommerce, NLTK, Aprovacao} = require('./models')
const Sequelize = require('sequelize');


const Op = Sequelize.Op
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
app.get('/produtos/:id', async (req,res) => {
    const produtos = await Produto.findOne({
        where: {
            id: req.params.id
        },
        include: [Comentario, NLTK]
    })
    res.json(produtos)
})
app.get('/produtos/nome/:nome', async (req,res) => {
    const produtos = await Produto.findAll({
        where: {
            nome: { [ Op.like]: '%'+req.params.nome+'%' }
        }
    })
    res.json(produtos)
})
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
app.post('/aprovados', async (req,res) => {
    const aprovar = await Aprovacao.create(req.body)
    res.json(aprovar)
})
app.get('/aprovados', async (req,res) => {
    const aprovar = await Aprovacao.findAll()
    res.json(aprovar)
})
app.post('/ntlk', async (req,res) => {
    const ntlk = await NLTK.create(req.body)
    res.json(ntlk)
})
app.get('/ntlk', async (req,res) => {
    const ntlk = await NLTK.findAll()
    res.json(ntlk)
})
app.listen(4000)