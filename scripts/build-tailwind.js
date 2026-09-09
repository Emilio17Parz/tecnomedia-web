const fs = require('fs');
const path = require('path');
const { compile } = require('tailwindcss');

const ROOT = path.resolve(__dirname, '..');
const twPackage = path.dirname(require.resolve('tailwindcss/package.json'));
const baseCss = fs.readFileSync(path.join(twPackage, 'index.css'), 'utf8');
const input = `${baseCss}\n@custom-variant dark (&:where(.dark, .dark *));\n`;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git') return [];
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function candidatesFrom(text) {
  const found = new Set();
  const classRegex = /class\s*=\s*["']([^"']+)["']/g;
  let match;
  while ((match = classRegex.exec(text))) {
    match[1].split(/\s+/).filter(Boolean).forEach(c => found.add(c));
  }
  return found;
}

(async () => {
  const candidates = new Set();
  for (const file of walk(ROOT)) {
    if (!/\.(html|js)$/.test(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const c of candidatesFrom(text)) candidates.add(c);
  }
  const compiler = await compile(input, { base: ROOT });
  const css = compiler.build([...candidates]);
  fs.writeFileSync(path.join(ROOT, 'assets/css/tailwind.css'), css);
  console.log(`Tailwind CSS generado con ${candidates.size} clases.`);
})();
