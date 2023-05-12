const http = require("http")

const PORT = 3000;

const basicRequest = (req, res) => {
    if (req.url === "/friends") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        // Response content when end or incoming. It expect a string always. 
        res.end(JSON.stringify({ message: 'Hello Sir Isaac Newton! You are a friend...' }))
    } else {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>');
        res.write('HOLA MUNDO');
        res.write('</h1>');
        res.write('<ul>')
        res.write('<li> How can we enter to the 4th dimension? </li>')
        res.write('</ul>')
        res.write('</body>');
        res.write('</html>');
        // We need to execute end() because if not we are leaving an open connection waiting to end in the browser
        res.end();
    }
}
const server = http.createServer(basicRequest)

// Now listen events
server.listen(PORT, () => { console.log(`Listening! on port ${PORT}...`) })
