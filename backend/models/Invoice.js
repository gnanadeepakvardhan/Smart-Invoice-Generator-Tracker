const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clientName: String,
  items: [{ description: String, quantity: Number, price: Number }],
  taxRate: Number,
  status: { type: String, enum: ['paid', 'unpaid', 'overdue'], default: 'unpaid' },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
