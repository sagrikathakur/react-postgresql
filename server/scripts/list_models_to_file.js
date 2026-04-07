import 'dotenv/config';
import axios from 'axios';
import fs from 'fs';

async function list() {
  try {
    const r = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const names = r.data.models.map(m => m.name).join('\n');
    fs.writeFileSync('models_list.txt', names);
    console.log('Model list written to models_list.txt');
  } catch (e) {
    console.error(e.response?.data || e.message);
  }
}

list();
