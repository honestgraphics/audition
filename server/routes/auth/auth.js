const IsAuthenticated = (req, res, next) => {
  if(!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).send("User is not authenticated")
  }

  next()
}

module.exports = {
  IsAuthenticated
}