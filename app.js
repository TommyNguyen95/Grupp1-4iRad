// Require the express module
const express = require('express');
// Require jsonflex
const jsonflex = require('jsonflex')();
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder and serve the jsonflex script
app.use(jsonflex);
app.use(express.static('www'));
// Start the web server on port 3000
app.listen(3000,() => console.log('Listening on port 3000'));

const fs = require('fs');
const path = require('path');

// Automatically load all scripts at root level of js folder
// and load their corresponding template files
app.get('/autoload-js-and-templates', (req, res) => {
  let files = fs.readdirSync(path.join(__dirname, '/www/js'));
  files = files.filter(x => x.substr(-3) === '.js')
  let html = files.map(x => `<script src="/js/${x}"></script>`).join('');
  html += files.filter(x => fs.existsSync(path.join(
      __dirname, '/www/templates', x.split('.js').join('.html')
  ))).map(x => `<script src="/template-to-js/${
    x.split('.js').join('.html')}"></script>`).join('');
  res.send(`document.write('${html}')`);
});

// Convert a template to a js render method
app.get('/template-to-js/:template', (req, res) => {
  let html = fs.readFileSync(path.join(
    __dirname, '/www/templates', req.params.template));
  html = req.params.template.split('.html')[0] +
    '.prototype.render = function(){ return `\n' + html + '\n`};'
  res.send(html);
});

// Serve the index page everywhere so that the
// frontend router can decide what to do
app.use((req, res, next) => {
  if(req.url === '/jsonflex.js' || req.url == '/json-save'){ next(); return; }
  res.sendFile(path.join(__dirname, '/www/index.html'));
});
