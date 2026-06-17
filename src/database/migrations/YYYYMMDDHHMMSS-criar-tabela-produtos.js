'use strict';

module.exports = {
    // up: o que fazer ao aplicar a migração
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING(120),
            },
            preco: {
                allowNull: false,
                type: Sequelize.DECIMAL(10, 2),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    // down: o que fazer ao reverter a migração
    async down(queryInterface) {
        await queryInterface.dropTable('produtos');
    },
};
