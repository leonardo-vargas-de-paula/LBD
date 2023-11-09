const Funcionario = require('../src/models/Funcionario');

module.exports = {
    async list(req, res){
        try {
            const funcs = await Funcionario.findAll()
            return res.json(funcs);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async show(req, res){
        try {
            const func = await Funcionario.findAll({where: {id: req.params.id}});
            return res.json(func);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async create(req, res){
        const {id_func, pnome, unome, salario, cpf, num_cel} = req.body;
        try {
            const func = await Funcionario.create({id_func, pnome, unome, salario, cpf, num_cel});
            return res.json(func);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const {id_func, pnome, unome, salario, cpf, num_cel} = req.body;
        const id = req.params.id;
        try {
            await Funcionario.update({id_func, pnome, unome, salario, cpf, num_cel}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Filme ${pnome} atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Filme ${pnome} não foi atualizado`}, err);            
        }
    },
    async delete(req, res){
        try {
            await Funcionario.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}