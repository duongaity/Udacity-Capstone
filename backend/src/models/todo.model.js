const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        name: {
            field: 'name',
            foreignKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            field: 'status',
            type: DataTypes.BOOLEAN,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        }
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('todo', attributes, options);
}
