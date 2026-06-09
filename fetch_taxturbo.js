const https = require('https');

https.get('https://www.taxturbo.in/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n');
    lines.forEach((line, index) => {
      if (line.match(/canvas|fluid|particle|mouse|trail|cursor/i)) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
      }
    });
  });
}).on('error', (err) => console.log('Error: ' + err.message));
