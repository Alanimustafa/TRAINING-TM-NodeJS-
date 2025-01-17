// 'http' is a module is already included in the Node JS
import http from 'http'
const portNumber = 3000;


// creating a new http server
const server = http.createServer((req, res) => {

    // To set a header to the contents 
    res.setHeader('Content-Type', 'text/html');

    // res.write('Hello World!') 
    //res.end('<h1> Hello World! </h1>'); // We can git rid of the res.write() by typing Hello World in res.end()

    // to set a status of the response to different value (ex; 404)
    res.statusCode = 404;

    // another methode is writeHead ('error code' , {"content-type" : "applicaiton/json"})

    res.writeHead (500, {"content-type" : 'application/json'})
    res.end (JSON.stringify({message : ' ServerError'}));
})


server.listen (portNumber, () => {
    console.log(`Server is Running on PORT Number ${portNumber}`)
})