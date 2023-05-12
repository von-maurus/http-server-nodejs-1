const http = require("http")

const PORT = 3000;

// create a simple server
const server = http.createServer()

let friends = [
    {
        id: 1,
        name: "Isaac Newton"
    },
    {
        id: 2,
        name: "Albert Einstein"
    },
    {
        id: 3,
        name: "Carl Sagan"
    },
]

server.on("request", (req, res) => {
    const items = req.url.split("/");
    switch (req.method) {
        case "GET": {
            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            // Response content when end or incoming. It expect a string always. 
            res.write("<ul>")
            const names = friends.map(friend => friend.name);
            names.forEach(name => {
                res.write("<li>" + JSON.stringify(name) + "</li>")
            })
            res.write("</ul>")
            res.end()
            break;
        }
        case "POST": {
            res.write('<html>');
            res.write('<body>');
            res.write('<h1>');
            res.write('Adding a new friend to our list');
            res.write('</h1>');
            res.write('<ul>')
            res.write('<li> Tell me friend, How can we enter to the 4th dimension? </li>')
            res.write('</ul>')
            res.write('</body>');
            res.write('</html>');
            // We need to execute end() because if not we are leaving an open connection waiting to end in the browser
            if (items[1] === "add-friend") {
                req.on("data", (data) => {
                    const friend = data.toString();
                    console.log("Added friend: ", friend)
                    friends.push(JSON.parse(friend))
                }).on("end", () => {
                    res.end()
                });
            } else {
                res.end()
            }
            break;
        }
        case "PUT": {
            res.end("Made a put")
            break;
        }
        default:
            break;
    }
})

// Now listen events
server.listen(PORT, () => { console.log(`Listening! on port ${PORT}...`) })
