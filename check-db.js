/*const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const pool = new Pool({
  connectionString: 'postgres://gulay:M7uE5dO7plveAje8CO9gKnyv9mMAV7CZ@dpg-db3uelmb7d7c739m758g-a.frankfurt-postgres.render.com/testdb_du2f',
  ssl: { rejectUnauthorized: false }
});

async function setupAndCheck() {
  try {
    console.log("1. Bulud bazasında cədvəl yaradılır (password VARCHAR(255))...");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);

    // '12345' şifrəsini bcrypt ilə hash-ləyirik
    const plainPassword = '12345';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    console.log("2. Bcrypt ilə şifrələnmiş test istifadəçisi daxil edilir...");
    await pool.query(`
      INSERT INTO users (username, password) 
      VALUES ($1, $2) 
      ON CONFLICT (username) DO NOTHING;
    `, ['admin', hashedPassword]);

    console.log("3. BAZADAKİ İSTİFADƏÇİLƏR VƏ ŞİFRƏLƏNMİŞ (BCRYPT) HASH-LƏR:");
    const res = await pool.query('SELECT id, username, password FROM users;');
    console.table(res.rows);

  } catch (err) {
    console.error("Xəta baş verdi:", err.message);
  } finally {
    await pool.end();
  }
}

setupAndCheck();*/