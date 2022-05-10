const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
            freezeTableName: true,
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            instanceMethods: {
                validPassword: function(password) {
                    return bcrypt.compareSync(password, this.password);
                }
            }
        }
    );

    user.sync();
    return user;
};
