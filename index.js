const express = require('express')
const mongoose = require('mongoose')
const Task = require('./models/task')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://shivanshsharma:76Xjx6fMmlcP51HZ@shivansh-p7.zwfahec.mongodb.net/shivanshsharma', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/tasks', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(error => res.status(500).json({ error }))
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)
  task.save()
    .then(() => res.json(task))
    .catch(error => res.status(500).json({ error }))
})

app.put('/tasks/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedTask => res.json(updatedTask))
    .catch(error => res.status(500).json({ error }))
})

app.delete('/tasks/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).json({ error }))
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
