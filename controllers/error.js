exports.error = (req, res, next) => {
  res.status(404);
  console.log("404");
};
