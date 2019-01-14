//@ts-check
const { spawn, execSync } = require('child_process');

const result = execSync('code --list-extensions');

const list = String(result)
  .split('\n')
  .filter(Boolean)
  .map(x => `- [${x}](marketplace.visualstudio.com/items?itemName=${x})`)
  .join('\n');

const process = spawn('pbcopy');
process.stdin.write(list);
process.stdin.end();
