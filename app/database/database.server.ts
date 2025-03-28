import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve('database.sqlite');
const db = new Database(dbPath);

export function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export function insertSubscriber(email: string) {
  try {
    const stmt = db.prepare('INSERT INTO subscribers (email) VALUES (?)');
    const info = stmt.run(email);
    return { success: true, info };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return { success: false, error: 'Email address already exists.' };
    }
    return { success: false, error: error.message };
  }
}

// You might call this function once when your server starts
// For example, in your entry.server.js:
// initializeDatabase();

export default db;