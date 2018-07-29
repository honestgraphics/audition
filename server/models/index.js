// (connection) =>

module.exports = (connection)=>{
  require("./audition")(connection)
  require('./users')(connection)
   return connection
}
