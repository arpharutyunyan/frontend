const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    try {
        // cleanQueryParam(req, res);
        readAndWriteFile(req, res);
    } catch (e) {
        res.statusCode = 500;
        res.end(e.message);
    }
});

server.listen(8000, 'localhost', () => {
    console.log('server started...')
})


// task 1
// read file even getting query param
function cleanQueryParam(req, res) {
    const {query, pathname} = url.parse(req.url, true);
    const filePath = path.join(__dirname, 'public', pathname);
    console.log(query, filePath);

    if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.end('File not found');
        return;
    }

    const data = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
}

// task 2
// read file from query param and write data taking from query param
function readAndWriteFile(req, res) {
    const {query} = url.parse(req.url, true);
    const {file, data} = query;

    if (file) {
        const filePath = path.join(__dirname, 'public', file);

        // if not exist data and file not created
        if (!fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, '');
        }

        if (data) {
            fs.appendFileSync(filePath, data + '\n');
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');

        res.setHeader('Content-Type', 'text/plain');
        res.end(fileContent);
    } else {
        res.statusCode = 404;
        res.end('File not provided');
    }
}