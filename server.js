// 'http' is a module is already included in the Node JS
import http from 'http'
const portNumber = 3000;


// creating a new http server
const server = http.createServer((req, res) => {
    res.write('Hello World!')
    res.end();
})


server.listen (portNumber, () => {
    console.log(`Server is Running on PORT Number ${portNumber}`)
})