import { Request, Response } from 'express';
import { getConnection } from '../db/connection.js';

export const getAllCategorias = async (_req: Request, res: Response) => {
  try {
    const conn = getConnection();
    const [rows]: any = await (await conn).query('SELECT * FROM categoria');

    res.json(rows);
  } catch (err: any) {
    console.error('Get Categories Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
