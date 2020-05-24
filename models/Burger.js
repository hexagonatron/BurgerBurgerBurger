module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define(
        "Burger", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1,100]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        })
        return Burger;
}