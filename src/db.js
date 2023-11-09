const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', '1518_comp', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;