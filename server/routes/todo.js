const express = require('express')
const Todo = require('../models/todo');

const router = express.Router();

// get all todo

router.get("/todo", (req, res) => {
   Todo.find().then(todos => {
    console.log(todos)
    res.json(todos);
   }).catch(e => {
    console.error(e)
   })
})

router.post("/todo", (req, res) => {
    const newTodo = new Todo({item: req.body.item, done: req.body.done});
    newTodo.save().then((r) => {
        console.log('r:', r)
        res.json(r)
    }).catch((e) => console.error(e))
})

module.exports = router;