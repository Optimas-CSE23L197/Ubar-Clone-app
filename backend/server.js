const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 4000

//create server
const server = http.createServer(app)

//listen to the server
server.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})