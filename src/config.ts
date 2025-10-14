export const config = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cafe_management',
    port: Number(process.env.DB_PORT) || 3306,
  },
  server: {
    port: Number(process.env.PORT) || 3000,
  },
};
