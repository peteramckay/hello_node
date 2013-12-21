/* 

Hello, Node: A Web Server

Copyright (c) 2013, Peter McKay

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



var http = require('http'), 
    net = require ('net'), 
    fs = require ('fs'), 
    express = require('express'),
    app = express (),
    httpServer = http.createServer(app); 

// Declaring variables for several modules here. Modules fs and net aren't really put to any use below, but I may want to experiment with them later.

app.configure (function () {
  app.set('port', 3000);
  app.use(express.static(__dirname + '/www'));
});

httpServer.listen(app.get('port'), function() {
  console.log("Express server is rapt, listening on localport:", httpServer.address().port);
});

