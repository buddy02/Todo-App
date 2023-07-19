const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.use(bodyparser.json())

var todo = [];

app.get('/todos', (req, res) => {
    res.send(todo)
})

app.get('/todos/:id', (req, res) => {
    const todoIndex = todo.findIndex(x => x.id === parseInt(req.params.id))
    if (todoIndex === -1) return res.status(404)
    res.json(todo[todoIndex]);
})

app.post('/todos', (req, res) => {
    var newTodo = {
        "id": Math.floor(Math.random() * 100000),
        "title": req.body.title,
        "description": req.body.description
    }
    todo.push(newTodo);
    res.send(newTodo)
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todo.findIndex(x => x.id === parseInt(req.params.id))
    if (todoIndex === -1) return res.status(404)
    todo.splice(todoIndex, 1);
    res.json(todo);
})

app.put('/todos/:id', (req, res) => {
    const todoIndex = todo.findIndex(x => x.id === parseInt(req.params.id))
    if (todoIndex === -1) return res.status(404)
    todo[todoIndex].title = req.body.title;
    todo[todoIndex].description = req.body.description;
    res.json(todo);
})

// for all other routes, return 404
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
