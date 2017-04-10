// page.js
module.exports = function (req, res, next) {

    var page = req.query.pageStart;

    var perPage = req.query.pageSize;

    console.log(page);

    if(page > 0)
        req.query._page = page;

    if(perPage > 0)
        req.query._limit = perPage;

    req.query._sort = 'id';

    //res.jsonp({ user: 'tobi' });
    next();
}