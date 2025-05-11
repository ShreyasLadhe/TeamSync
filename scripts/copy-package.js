const fs = require('fs');
const path = require('path');

fs.copyFileSync(
  path.join(__dirname, '../package.json'),
  path.join(__dirname, '../dist/package.json')
);
