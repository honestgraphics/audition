module.exports = {
    Audition: require("./audition")
  };

module.exports = (connection) =>{
  require('./users')(connection)
  return connection
}