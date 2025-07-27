const asyncCatchHandler = (passesFunction) => (req, res, next) => {
    Promise.resolve(passesFunction(req, res, next)).catch((error) => {
        next();
    })
};


export default asyncCatchHandler;