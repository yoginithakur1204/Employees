'use strict';
const Employee = require('./employee_data.model') ;
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const db: any = {};


const sequelize: typeof Sequelize = new Sequelize(

  config.database,
  config.username,
  config.password,
  {
  host: config.host,
  dialect: "mssql",
  pool: {
  
  max: parseInt(config.pool.max),
  min: parseInt(config.pool.min),
  acquire: parseInt(config.pool.acquire),
  idle: parseInt(config.pool.idle),
  },
  }
  );
  const Db: any = {};
  Db.Sequelize = Sequelize;
  Db.sequelize = sequelize;
  Db.employee=Employee(sequelize);
  module.exports = Db;

