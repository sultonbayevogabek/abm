module.exports =  async (Sequelize, sequelize) => {
    return await sequelize.define('users', {
        user_id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false
        },
        phone: {
            type: Sequelize.DataTypes.STRING(32),
            is: /^9989[012345789][0-9]{7}$/,
            allowNull: false,
        },
    })
}