// const { readFile } = require('fs/promises');
import { readFile } from 'fs/promises';

// console.log(import.meta.url);

const filePath = new URL('./processdemo.js', import.meta.url);
const data = await readFile(filePath);
console.log(data);
