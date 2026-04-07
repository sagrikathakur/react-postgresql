import 'dotenv/config';
import sql from '../config/db.js';

async function setup() {
  try {
    console.log('Initializing database tables...');

    // 1. Creations Table (with is_public flag)
    await sql`
      CREATE TABLE IF NOT EXISTS creations (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        prompt TEXT NOT NULL,
        content TEXT NOT NULL,
        type TEXT NOT NULL,
        is_public BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('- Table "creations" ready.');

    // 2. Likes Table (for Community features)
    await sql`
      CREATE TABLE IF NOT EXISTS likes (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        creation_id INTEGER REFERENCES creations(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, creation_id)
      )
    `;
    console.log('- Table "likes" ready.');

    // 3. Comments Table (for Community features)
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        creation_id INTEGER REFERENCES creations(id) ON DELETE CASCADE,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('- Table "comments" ready.');

    console.log('\nDatabase setup complete! All tables are ready for your AI project.');
    process.exit(0);
  } catch (error) {
    console.error('Database setup failed:', error.message);
    process.exit(1);
  }
}

setup();
