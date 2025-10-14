import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { getConnection } from '../db/connection.js';

// Register Administrador
export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Missing fields' });

    const conn = getConnection();
    const [existing]: any = await (await conn).query(
      'SELECT id FROM administrador WHERE username = ?',
      [username]
    );

    if (existing.length > 0)
      return res.status(400).json({ error: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result]: any = await (await conn).query(
      'INSERT INTO administrador (username, password_hash) VALUES (?, ?)',
      [username, hashedPassword]
    );

    res.status(201).json({ id: result.insertId, username });
  } catch (err: any) {
    console.error('Register Admin Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Register Caficultor
export const registerCaficultor = async (req: Request, res: Response) => {
  try {
    const { nombre, id_administrador, id_cooperativa } = req.body;

    if (!nombre || !id_administrador || !id_cooperativa)
      return res.status(400).json({ error: 'Missing fields' });

    const conn = getConnection();
    const [result]: any = await (await conn).query(
      'INSERT INTO caficultor (nombre, id_administrador, id_cooperativa) VALUES (?, ?, ?)',
      [nombre, id_administrador, id_cooperativa]
    );

    res.status(201).json({ id: result.insertId, nombre });
  } catch (err: any) {
    console.error('Register Caficultor Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login Administrador
export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Missing fields' });

    const conn = getConnection();
    const [rows]: any = await (await conn).query(
      'SELECT id, password_hash FROM administrador WHERE username = ?',
      [username]
    );

    if (rows.length === 0)
      return res.status(400).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, rows[0].password_hash);
    if (!match)
      return res.status(400).json({ error: 'Incorrect password' });

    res.json({ id: rows[0].id, username });
  } catch (err: any) {
    console.error('Login Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
