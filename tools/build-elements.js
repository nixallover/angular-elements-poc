const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/libs/chart/runtime.js',
    './dist/libs/chart/polyfills.js',
    './dist/libs/chart/main.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/chart-element.js');
})();
