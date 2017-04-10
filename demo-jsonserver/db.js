var users = require("./db/users");

var accounts = require("./db/accounts");

module.exports = function(){
    return {
        users: users,
        accounts: accounts
    }
}