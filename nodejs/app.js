const PORT = 3000;
//const app = require("./app/config/ejs")();
const app = require("./app/config/nunjucks")();
const routes = require('./app/routes/main')(app);

app.listen(PORT, function () {
    console.log("Server listening on port %s...", PORT);
});