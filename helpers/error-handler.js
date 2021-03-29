function errorHandler (err, req, res, next) {
   // default to 500 server error
   return res.status(500).json(err);
};


module.exports = errorHandler;