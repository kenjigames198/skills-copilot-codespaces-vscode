// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Server error');
        } else {
            res.end(data);
        }
    });
});
