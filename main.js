const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

const aaa = 'aaa';  // 変更不可だよ！
aaa = 222;  // 変更できなかった！

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`${aaa} Server running at http://${hostname}:${port}/`);
});