module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define(
        "Burger", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    )
}