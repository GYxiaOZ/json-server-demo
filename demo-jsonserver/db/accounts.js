var faker = require("faker");

var R = require("ramda");

faker.locale = "zh_CN";

module.exports = R.times(function (n) {
    return {
        id: n,
        account: faker.finance.account(),
        amount: faker.finance.amount(),
        password: faker.random.number()
    }

}, 10);