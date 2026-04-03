const xlsx = require('xlsx');
try {
  const wb = xlsx.readFile('./managers emails.xlsx');
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(JSON.stringify(data.slice(0, 10), null, 2));
} catch (e) {
  console.error("Error:", e.message);
}
