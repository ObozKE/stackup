const https = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
  'entry.47284777': 'Stackup Test User',
  'entry.1630308019': '0790870596',
  'entry.1438439933': 'stackupke@gmail.com',
  'entry.448324612': 'Web Development',
  'entry.387243583': 'Automated test submission from website setup',
});

const options = {
  hostname: 'docs.google.com',
  port: 443,
  path: '/forms/d/e/1FAIpQLSdfKWbT7wMOLjmjNI4OAx6A4_3ub9zqAXcppGYHgZjU371bTA/formResponse',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  },
};

const req = https.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  if (res.statusCode === 200) {
    console.log('🎉 SUCCESS! 200 OK! Google Form accepted the response!');
  } else {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => console.log('Error snippet:', body.slice(0, 300)));
  }
});

req.on('error', (e) => {
  console.error('Problem with request:', e.message);
});

req.write(postData);
req.end();
