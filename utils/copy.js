const fs = require('fs')
const { join } = require('path')

function copy(from, to) {
  const files = fs.readdirSync(from);

  files.forEach((file) => {
    const fromPath = join(from, file);
    const destPath = join(to, file);

    if (fs.statSync(fromPath).isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      copy(fromPath, destPath);
    } else {
      fs.copyFileSync(fromPath, destPath);
    }
  });
}

module.exports = { copy };
