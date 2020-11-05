const DefaultException = require("../default_exception");

class UserNotFoundException extends DefaultException {
    constructor(message) {
        super(404, message);
        this.message = message;
    }
}

module.exports = UserNotFoundException;