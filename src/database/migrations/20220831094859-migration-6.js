'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'coffes',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        name: {
          allowNull: true,
          type: Sequelize.DataTypes.STRING,
        },
        brand: {
          allowNull: true,
          type: Sequelize.DataTypes.STRING,
        },
        flavors: {
          allowNull: true,
          type: Sequelize.DataTypes.JSONB,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        logging: console.log,
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Coffe');
  },
};
