const connect = require('connect');
const app = connect();

function helloNodeJsApp(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};
function helloNodeJsHtml(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1> Hello from NodeJS Application as html</h1>');
    res.end();
};
function helloNodeJsJson(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify("Hello from NodeJS Application as JSON"));
};

app.use('/html', helloNodeJsHtml);
app.use('/json', helloNodeJsJson);
app.use('/', helloNodeJsApp);

app.listen(3000);
console.log('Server running at http://localhost:3000');