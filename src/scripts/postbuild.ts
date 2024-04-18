import * as fs from 'fs';

const indexPath = 'dist/index.html';
const notFoundPath = 'dist/404.html';

fs.copyFile(indexPath, notFoundPath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
    return;
  }
  console.log('index.html was copied to 404.html successfully.');
});