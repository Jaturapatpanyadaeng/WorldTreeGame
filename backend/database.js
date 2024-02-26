const mysql = require("mysql")
const dbConnection = mysql.createPool({
    host:"https://databases-auth.000webhost.com/index.php?route=/database/structure&db=id21644932_worldtree_db",
    username:'Admin',
    password:'WorldTree404#',
    database:'id21644932_worldtree_db'
})

module.exports = dbConnection;