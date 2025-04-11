import Transaction from "../models/transactions.model.js";
import {transactionSchema} from "../middlewares/validateTransaction.js";

export async function createTransaction(req, res) {
    try {
        const parsed = transactionSchema.safeParse(req.body);

        if(!parsed.success) {
            res.status(400).json({ errors: parsed.error.format() });
        }
        
        const transaction = await Transaction.create(parsed.data);
        return res.status(201).json(transaction);
    }
    catch (error) {
        console.error('Erro ao criar transação:', error)
        return res.status(500).json({message: 'Erro interno do servidor'});
    }
}

export async function getAllTransactions(req, res) {
    try {
      const transactions = await Transaction.find().sort({ date: -1 })
      return res.status(200).json(transactions)
    } catch (error) {
      console.error('Erro ao buscar transações:', error)
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }