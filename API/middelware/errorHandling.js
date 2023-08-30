function errorHandling(err, req, res, next) {
    if (err) {
        let status = err.status || 500;
        let message = err.message || "An error occurred, try again later 😥";
        res.status(status).json({
            status,
            msg: message
        });
    }
}

module.exports = errorHandling;
