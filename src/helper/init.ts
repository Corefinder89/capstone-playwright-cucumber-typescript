// const fs = require('fs-extra');

import fs from 'fs-extra';

try {
  fs.ensureDir('test-results');
  fs.emptyDir('test-results');
} catch (error) {
  console.log('Folder not created! + error');
}
