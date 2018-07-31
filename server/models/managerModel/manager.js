const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// module.exports = (connection)=>{


const managerSchema = new Schema({

    // There are a number of entries here that are not required. These are elements 
    // that I am unsure are going to be required. 
    

  auditionedBy: { type: String, },

  auditionDateSubmitted: { type: Date, default: Date.now },

  managerApprovalBy: {type: String,},

// Temporary default date of Date.now to get started
  managerDateSubmitted: { type: Date, default: Date.now },

  auditionApprovalStatus: {type: Boolean, default: false},

 // Temporary means of holding a song, or at least s3 related info about a song
  auditionSongLink: {type: String},

  // this is the id for the music for business purposes; not the mongo _id
  auditionId: {type: String,},

  songCategory: {type: String},

  ISRC: {type: String},

  recordLabel: {type: String},

  artist: {type: String},

  songTitle: {type: String},

  album: {type: String},

  filepath: {type: String,},

  editAndDeleteLinks: {type: String,}

});

 const Manager = mongoose.model("Manager", managerSchema);
// }
module.exports = Manager;
