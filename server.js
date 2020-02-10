// const http = require('http');
const app = require('./app');

// app.set('port', process.env.PORT || 3000)
// const server = http.createServer(app);
// server.listen(process.env.PORT || 3000);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running!'));