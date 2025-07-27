const errorMiddleware = (err, req, res, next) => {

    err.message = err.message || "Internal Server error!";
    err.statusCode = err.statusCode || 500;
    err.from = err.from || "Unknown source";

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        errorMessage: err.message,
        from: err.from,
        error: {
            name: err.name,
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined
        }
    });

};

export default errorMiddleware;