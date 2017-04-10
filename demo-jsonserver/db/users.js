var faker = require("faker");

var R = require("ramda");

faker.locale = "zh_CN";

/**
 * 返回一个数组, 长度为10
 * es5版本
 *  R.times(
        function(n){
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.image.avatar()
            }
        },
        10
    );
 */
module.exports = R.times(
    (n) => (
        {
            id: n,
            name: faker.name.findName(),
            avatar: faker.image.avatar()
        }
    )
    )(10);
