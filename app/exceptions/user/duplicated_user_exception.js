const DefaultException = require("../default_exception");

class DuplicatedUserException extends DefaultException {
    constructor(message) {
        super(400, message);
        this.message = message;
    }
}

module.exports = DuplicatedUserException;