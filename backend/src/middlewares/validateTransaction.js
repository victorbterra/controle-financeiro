import { z } from 'zod';


//schema dos dados
export const transactionSchema = z.object ({
    type:z.enum(['receita','despesa']),
    description:z.string().min(1),
    amount:z.number().positive(),
    date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    category:z.string().min(1),
})


export function validateTransaction(req,res,next) {
    try {
        transactionSchema.parse(req.body)
        next()
    }
    catch (error) {
        return res.status(400).json({error:error.errors})
    }
}
