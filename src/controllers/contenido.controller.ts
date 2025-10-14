import { Request, Response } from 'express';
import { getConnection } from '../db/connection.js';

export const getContenidoByCategoria = async (req: Request, res: Response) => {
  try {
    const { categoriaId } = req.params;
    const conn = getConnection();

    const [rows]: any = await (await conn).query(
      'SELECT * FROM contenido WHERE id_categoria = ?',
      [categoriaId]
    );

    res.json(rows);
  } catch (err: any) {
    console.error('Get Contenido Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
