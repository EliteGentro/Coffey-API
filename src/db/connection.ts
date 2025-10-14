import mysql from 'mysql2/promise';
import { config } from '../config.js';

let pool: mysql.Pool;

export const getConnection = () => {
  if (!pool) {
    pool = mysql.createPool({
      ...config.db,
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  return pool;
};
