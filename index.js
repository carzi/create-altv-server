const { join } = require('path')
const { copy } = require('./utils/copy')
const { execSync } = require('child_process')

const templateFolder = join(__dirname, 'template')
const projectFolder = process.cwd()

copy(templateFolder, projectFolder)

execSync('npm i', { stdio: 'inherit' });
execSync('npx altv create', { stdio: 'inherit' });

console.log('\nУстановка завершена.')