const asyncCatchHandler = (passesFunction) => (req, res, next) => {
    Promise.resolve(passesFunction(req, res, next)).catch((error) => {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            errorMessage: error.message,
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            }
        })
    })
};


export default asyncCatchHandler;