/*

Hello, Node: A Web Server

Copyright (c) 2013-2026, Peter A. McKay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 1337;
const HOST = process.env.HOST || '127.0.0.1';

http.createServer(function (req, res) {
  // Parse the request URL — handy for reading paths and query strings later.
  // e.g. const { pathname, query } = url.parse(req.url, true);
  const parsedUrl = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hiya!\n');
}).listen(PORT, HOST);

console.log(`The server running like Usain Bolt at http://${HOST}:${PORT}/`);
