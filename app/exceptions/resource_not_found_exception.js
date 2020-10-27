class ResourceNotFoundException extends Error{
    constructor(message) {
        super(message);
        this.code = 404;
        this.message = message;
    }
}

module.exports = ResourceNotFoundException;