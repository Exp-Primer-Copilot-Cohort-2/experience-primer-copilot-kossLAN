// Create web server

// Import required modules
const http = require('http');
const fs = require('fs'); // Only if you need to serve static files

// Define server hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Read the primer HTML file (assuming it's stored in the same directory)
    fs.readFile('copilot-primer.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            // Write the content of the file to response body
            res.write(data);
        }
        // Send the response body
        res.end();
    });
});

// Start the server and listen on port 3000
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
