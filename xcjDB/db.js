var versionArr = require("./db/Android");
var test = [1,2,3];

module.exports = (() => (
    {
        version: versionArr.reverse(),
        test: test,
        xxx: [1,1,1]
    }
));