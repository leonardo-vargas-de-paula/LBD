const Sequelize = require('sequelize');
const database = require('../db');
const sequelize = require('../db.js')


const Funcionario = database.define('funcionario',{
    id_func:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    pnome:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    unome: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      salario:{
        type: Sequelize.DECIMAL(8, 2)
      }
      ,
      cpf: {
        type: Sequelize.STRING(14),
        unique: true,
        allowNull: false
      },
      num_cel: {
        type: Sequelize.STRING(11)
      }
})

//n:n um funcionario pode trabalhar em diversos blocos
// Funcionario.belongsToMany(Bloco, {
//     through: {
//         model: Funcionario_Bloco
//     },
//     foreignKey: 'idFuncionario',
//     constraint: true
// })
sequelize.sync();
module.exports = Funcionario;