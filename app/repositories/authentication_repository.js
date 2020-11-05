const admin = require('firebase-admin');

const createFirebaseUser = async (email, cellphone, password, name) => {
    const user = await admin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        phoneNumber: cellphone
    });

    return user.uid;
}

module.exports = {
    createFirebaseUser
}