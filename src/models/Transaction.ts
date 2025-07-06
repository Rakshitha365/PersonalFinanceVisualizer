import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITransaction extends Document {
  amount: number;
  date: string;
  description: string;
}

const TransactionSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Transaction: Model<ITransaction> =
  mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', TransactionSchema);

export default Transaction;