module.exports = function(app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.use(/.*.html$/, function (req, res, next) {
        console.log("Entering in the middleware");
        next();
    });

    app.get(/.*.html$/, function (req, res) {
        var data = {
            a:1, 
            b:2
        };
        res.render("article", data);
    });

    app.get("*", function (req, res) {
        res.render("404");
    });

}