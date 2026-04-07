import 'dotenv/config';
import sql from '../config/db.js';

async function test() {
  try {
    await sql`INSERT INTO creations (user_id, prompt, content, type) 
              VALUES ('TEST_USER', 'TEST_PROMPT', 'TEST_CONTENT', 'test')`;
    console.log('Test record inserted successfully! Your database is working.');
    process.exit(0);
  } catch (error) {
    console.error('Database Connectivity Error:', error.message);
    process.exit(1);
  }
}

test();
