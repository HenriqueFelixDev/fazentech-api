const bcrypt = require('bcrypt');

const encryptPassword = async password => 
    await bcrypt.hash(password, 10);

const verifyPassword = async (password, hash) =>
    bcrypt.compare(password, hash);

module.exports = {
    encryptPassword,
    verifyPassword
}