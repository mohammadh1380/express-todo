import bcrypt from "bcrypt";
const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
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
                validPassword: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
            }
        },
    );

    User.associate = (models) => {
        User.hasMany(models.Task);
    };
    return User;
};

export default UserModel;
