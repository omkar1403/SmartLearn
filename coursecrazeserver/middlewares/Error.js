const ErrorMidleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server problem";
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorMidleware;