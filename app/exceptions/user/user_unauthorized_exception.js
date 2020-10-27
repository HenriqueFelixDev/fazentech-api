const DefaultException = require("../default_exception");

class UserUnauthorizedException extends DefaultException {
    constructor(message) {
        super(401, message);
        this.message = message;
    }
}

module.exports = UserUnauthorizedException;