const Sequelize = require('sequelize');
let sequelize = new Sequelize('db_teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 20,
        min: 5,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.sync();
module.exports = sequelize;