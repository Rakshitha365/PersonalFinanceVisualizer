import { dbConnect } from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const transactions = await Transaction.find().sort({ createdAt: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();

  if (!data.amount || !data.date || !data.description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const transaction = await Transaction.create(data);
    return NextResponse.json(transaction);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to add transaction' }, { status: 500 });
  }
}