require("dotenv").config();
const deafultConfig= {
  username: process.env.MARIADB_USER,
  paaword:process.env.MARIADB_PASSWORD,
  database:process.env.MARIADB_DATABASE,
  host:process.env.MARIADB_HOST,
  port:process.env.MARIADB_PORT,
  dialect: "mariadb"
}

module.exports={
  development:deafultConfig,
  production: Object.assign(deafultConfig,{})
}


