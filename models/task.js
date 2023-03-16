const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In-Progress', 'Completed'], default: 'Open' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Task', taskSchema)
