const fs = require('fs');
const path = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\be9f08c2-a591-4f1d-89f7-8b2c43c2bbf0\\.system_generated\\steps\\965\\content.md';

const content = fs.readFileSync(path, 'utf8');

// Regex to find entry IDs and titles
const matches = [...content.matchAll(/\[(\d{8,12}),"([^"]+)"/g)];
console.log("Matched entries:", matches.map(m => `entry.${m[1]} -> ${m[2]}`));

// Also find any entry.XXXXXX in the text
const rawEntries = [...content.matchAll(/entry\.\d+/g)];
console.log("Raw entry strings:", [...new Set(rawEntries.map(m => m[0]))]);
