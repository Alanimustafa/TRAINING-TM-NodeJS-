// 'http' is a module is already included in the Node JS
import http from 'http'
import fs from "fs/promises"; // Importing the Promise Version of fs (File System). Also it used for read file, write file
import url from 'url'; // 'url' is alraady in the Node.JS Module
import path from 'path'; // 'path' is alraady in the Node.JS Module
const portNumber = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url); // __filename gives you the file url with the file name
const __dirname = path.dirname(__filename); // __dirname the directory path without the file name.

// console.log(__filename, "    ", __dirname);

// creating a new http server
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            // Lets create a condition to check the rout
            if (req.url === '/') {
                res.writeHead (200, {"content-type" : 'text/html'})
                res.end ("<h1>Hello World</h1>");
            } else if (req.url === '/user') {
                res.writeHead (200, {"content-type" : 'text/html'})
                res.end ("<h1>The user</h1>");
            } else {
                res.writeHead (404, {"content-type" : 'text/html'})
                res.end ("<h1>404 PAGE NOT FOUNT</h1>");
            }
        } else {
            throw new Error ("Method NOT Allowed");
        }

    } catch (error){
        res.writeHead (500, {'content-type' : 'text/html'})
        res.end ("<h1>Server Error</h1>")
    }



    // To set a header to the contents 
    // res.setHeader('Content-Type', 'text/html');
    // console.log(req.url) // the .url here returns the url (path)
    // console.log(req.method)
    // res.write('Hello World!') 
    //res.end('<h1> Hello World! </h1>'); // We can git rid of the res.write() by typing Hello World in res.end()

    // to set a status of the response to different value (ex; 404)
    // res.statusCode = 404;

    // another methode is writeHead ('error code' , {"content-type" : "applicaiton/json"})



})


server.listen (portNumber, () => {
    console.log(`Server is Running on PORT Number ${portNumber}`)
})