const { sign, verify } = require("jsonwebtoken");
const path = require("path");

require("dotenv").config({path: path.join(__dirname, '..', '..', '.env')});
let SECRET_WORD = process.env.SECRET_WORD;

const generateToken =  (data) =>  sign(data, SECRET_WORD);

const checkToken =  (token) => {
    try {
        return verify(token, SECRET_WORD)
    } catch (e) {
        console.log(e)
        return false
    }
}

module.exports = {
    generateToken, checkToken
}