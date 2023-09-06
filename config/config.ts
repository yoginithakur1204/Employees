require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    apiUrl: process.env.API_URL,
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: Number(process.env.SEQUELIZE_TIMEOUT),
      idle: 10000
    },
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD
  },

};
