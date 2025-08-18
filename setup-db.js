const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://woo@localhost:5432/moreing'
});

async function setupDatabase() {
  try {
    const schema = fs.readFileSync('./src/lib/schema.sql', 'utf8');
    await pool.query(schema);
    console.log('Database setup completed!');
  } catch (error) {
    console.error('Database setup failed:', error);
  } finally {
    await pool.end();
  }
}

setupDatabase();