const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password,
        {
            dialect: 'mysql',
            host: host,
            charset: 'utf8',
            collate: 'utf8_general_ci', 
            operatorAlias:false,
            logging:false,
            pool: {
                max: 5,
                idle: 30000,
                acquire: 60000,
            },
        }
    );

    // init models and add them to the exported db object
    db.Todo = require('../models/todo.model')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}
