const TaskModel = function(sequelize, DataTypes) {
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
        },
    );

    Task.associate = (models) => {
        Task.belongsTo(models.User);
    };

    return Task;
}

export default TaskModel;