const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Admin\\.gemini\\antigravity\\brain\\be9f08c2-a591-4f1d-89f7-8b2c43c2bbf0\\.system_generated\\steps\\965\\content.md', 'utf8');

// Search for FB_PUBLIC_LOAD_DATA_
const match = content.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]*?\]);/);
if (match) {
  try {
    const data = JSON.parse(match[1]);
    const fields = data[1][1];
    console.log("Found Form Questions:");
    fields.forEach(f => {
      if (f) {
        const id = f[0];
        const title = f[1];
        const entryId = f[4] && f[4][0] ? f[4][0][0] : null;
        console.log(`Question: "${title}" | ID: ${id} | Entry: entry.${entryId}`);
      }
    });
  } catch (e) {
    console.error("Parse error:", e);
  }
} else {
  console.log("FB_PUBLIC_LOAD_DATA_ not found directly, searching raw array pattern...");
  // Alternative regex to extract [question_id, title, description, type, [[entry_id, ...]]]
  const fieldRegex = /\[(\d{8,10}),"([^"]+)",(?:null|"[^"]*"),(?:0|1|2|3|4|5|7|9|10|13),\[\[(\d{8,10})/g;
  let m;
  while ((m = fieldRegex.exec(content)) !== null) {
    console.log(`Question: "${m[2]}" | Question ID: ${m[1]} | Entry ID: entry.${m[3]}`);
  }
}
