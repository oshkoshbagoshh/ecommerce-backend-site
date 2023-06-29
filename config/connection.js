// set up the code to connect Node to MySQL.

require('dotenv').config();

const Sequelize = require('sequelize');


// create connection to our database, pass in your MySQL information for username and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',//change to 3306
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
// export the module
