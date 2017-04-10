// page.js
module.exports = function (req, res, next) {

    var page = req.query.pi;

    var pageSize = req.query.ps;

    console.log(page);

    if(page > 0)
        req.query._page = page;

    if(pageSize > 0)
        req.query._limit = pageSize;

    //res.jsonp({ user: 'tobi' });
    next();
}