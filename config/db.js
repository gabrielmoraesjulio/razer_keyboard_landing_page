const { Sequelize } = require('sequelize');

const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

conn.authenticate().then(() => {
    console.log("Database connected successfully!");
}).catch ((error) => {
    console.log('Unable to connect to the database:', error);
});

module.exports = conn;