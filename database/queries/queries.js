const query = require('./sqlquery.js')

const userExist = (username, cb) => query.select(`SELECT count(id) from users where username = '${username}'`, cb)

const checkPassword = (username, password, cb) => query.select(`SELECT count(id) from users where username = '${username}' AND password = '${password}'`, cb)
