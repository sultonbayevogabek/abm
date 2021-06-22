module.exports =  async (Sequelize, sequelize) => {
    return await sequelize.define('admins', {
        admin_id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false,
            unique: true
            
        },
        password: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: false,
        },
    })
}