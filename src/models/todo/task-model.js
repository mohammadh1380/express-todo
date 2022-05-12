const user = require('../account/userModel')
module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define(
        'task',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            isDone: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }, {
            classMethods: {
                associate: function(models) {
                    Task.belongsTo(models.belongsTo(models.Us));
                }
        }
    });

    return Task;
}