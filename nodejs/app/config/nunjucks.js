const app = require("express")();
const nunjucks = require('nunjucks');
const _templates = "./app/views";

nunjucks.configure(_templates, {
    autoescape: true,
    cache: false,
    express: app
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

module.exports = function () {
    return app;
}