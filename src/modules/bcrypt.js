const bcrypt = require("bcrypt");

module.exports.generateHash = (data) => {
    let hashSalt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, hashSalt);
};

module.exports.checkHash = (data, hash) => {
    return bcrypt.compareSync(data, hash)
};
