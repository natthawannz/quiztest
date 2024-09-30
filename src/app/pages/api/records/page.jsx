// pages/api/records/index.js
import connectDB from '../../../../../lib/mongodb';
import Record from '../../../../../models/Record';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const records = await Record.find({});
    return res.status(200).json(records);
  }

  if (req.method === 'POST') {
    const { amount, date, type, notes } = req.body;
    const newRecord = new Record({ amount, date, type, notes });
    await newRecord.save();
    return res.status(201).json(newRecord);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
