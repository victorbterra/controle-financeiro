import express from 'express'
import {
  getAllTransactions,
  createTransaction,
} from '../controllers/transactions.controller.js'
import { validateTransaction } from '../middlewares/validateTransaction.js'

const router = express.Router()

router.get('/', getAllTransactions)
router.post('/', validateTransaction, createTransaction)

export default router