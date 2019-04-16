const query = require('./sqlquery.js')

const userExist = (username, cb) => query.select(`SELECT count(id) from users where username = '${username}'`, cb)

const checkPassword = (username, password, cb) => query.select(`SELECT count(id) from users where username = '${username}' AND password = '${password}'`, cb)

const addUser = (username,password,email,cb) => query.insert(`INSERT INTO users (username,password,email) VALUES ($1,$2,$3)`,[username,password,email],cb)
