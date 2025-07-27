class errorHandler extends Error {
    constructor(message, statusCode, from) {
        super(message);
        this.statusCode = statusCode;
        this.from = from;
    }
}

export default errorHandler;