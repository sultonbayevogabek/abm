const { Sequelize } = require('sequelize')
const path = require("path");
require("dotenv").config({path: path.join(__dirname, '..', '..', '.env')});
const UserModel = require("../models/UserModel.js")
const AdminModel = require('../models/AdminModel.js')
const { generateHash } = require("./bcrypt.js");
const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
    logging: false
})

async function postgres () {
    try {
        let db = {}
        db.users = await UserModel(Sequelize, sequelize)
        db.admin = await AdminModel(Sequelize, sequelize)

        // let hashingTop = generateHash('abmuz0802')

        // await db.admin.create({name: "abmuz", password: hashingTop})
        // let findAdmin = await db.admin.findAll()
        // console.log(findAdmin)

        // await sequelize.sync({ force: true })
        
        return db
        
    }
    catch(e) {
        console.log("DB_ERROR:", e);
    }
}

module.exports = postgres