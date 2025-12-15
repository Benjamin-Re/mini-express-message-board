const { Router } = require('express')

const indexRouter = Router()

let nextId = 1

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
        id: nextId++
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
        id: nextId++
    }
]

indexRouter.get('/', (req, res) => {
    res.render('index', { messages })
})

indexRouter.get('/new', (req, res) => {
    res.render('form')
})

indexRouter.get('/message/:id', (req, res) => {
    const message = messages.find((message => {
      return message.id === parseInt(req.params.id)
    }))
    res.render('message', { message: message})
})

indexRouter.post('/new', (req, res) => {
    const { user, message } = req.body
    messages.push({
        text: message,
        user: user,
        added: new Date(),
        id: nextId++
    })
    res.redirect('/')
})

module.exports = indexRouter
