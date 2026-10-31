// Usage: node scripts/check-i18n.js — compares translation keys between locales.
const en = require('../src/i18n/locales/en.json');
const uz = require('../src/i18n/locales/uz.json');

const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );

const a = new Set(flatten(en));
const b = new Set(flatten(uz));
const missingInUz = [...a].filter((k) => !b.has(k));
const missingInEn = [...b].filter((k) => !a.has(k));

if (missingInUz.length || missingInEn.length) {
  if (missingInUz.length) console.error('Missing in uz.json:', missingInUz);
  if (missingInEn.length) console.error('Missing in en.json:', missingInEn);
  process.exit(1);
}
console.log(`OK: ${a.size} keys match in en.json and uz.json`);
