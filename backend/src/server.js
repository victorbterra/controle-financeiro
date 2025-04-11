import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from './database/db.js';
import transactionRoutes from './routes/transactions.routes.js';

dotenv.config();

const app = express();

const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/transactions', transactionRoutes);

connectDB()

app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta  ${PORT}`));
