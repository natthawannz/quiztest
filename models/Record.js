// models/Record.js
import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  notes: { type: String, required: false },
});

const Record = mongoose.models.Record || mongoose.model('Record', recordSchema);

export default Record;
