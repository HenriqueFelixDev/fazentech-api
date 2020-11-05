const DefaultException = require("./default_exception");

class InvalidArgumentException extends DefaultException {
    constructor(errors = [], message = 'Alguns parâmetros estão incorretos') {
        super(400, message);
        this.message = message;
        this.errors = errors;
    }
}

module.exports = InvalidArgumentException;