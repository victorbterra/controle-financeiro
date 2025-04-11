import express from 'express'
import {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction
} from '../controllers/transactions.controller.js'
import { validateTransaction } from '../middlewares/validateTransaction.js'

const router = express.Router()

router.post('/', validateTransaction, createTransaction)
router.get('/', getAllTransactions)
router.put('/:id', validateTransaction, updateTransaction)
router.delete('/:id', deleteTransaction)

export default router