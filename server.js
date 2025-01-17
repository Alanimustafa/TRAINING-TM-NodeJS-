// 'http' is a module is already included in the Node JS
import http from 'http'
const portNumber = process.env.PORT;


// creating a new http server
const server = http.createServer((req, res) => {

    // Lets create a condition to check the rout
    if (req.url === '/') {
        res.writeHead (200, {"content-type" : 'text/html'})
        res.end ("<h1>Hello World</h1>");
    } else if (req.url === '/user') {
        res.writeHead (200, {"content-type" : 'text/html'})
        res.end ("<h1>The user</h1>");
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