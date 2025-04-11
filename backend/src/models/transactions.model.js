import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['receita', 'despesa'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true })

export default mongoose.model('transaction', transactionSchema)
