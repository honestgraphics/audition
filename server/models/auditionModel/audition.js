const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// module.exports = (connection)=>{


const auditionSchema = new Schema({

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

  // can use this entry or internal mongo _id value for purpose of table
  auditionId: {type: String,},

  songCategory: {type: String},

  ISRC: {type: String},

  recordLabel: {type: String},

  artist: {type: String},

  songTitle: {type: String},

  album: {type: String},

  filepath: {type: String,},

  editAndDeleteLinks: {type: String,},
 // Selected is a boolean that represents whether a row has been selected for submission
  selected: {type: Boolean, default: false},
// this boolean will only become true if both "selected" and "auditionApprovalStatus" are both true
  readyForManager: {type: Boolean, default: false},

  onManagerPage: {type: Boolean, default: false}

});

 const Audition = mongoose.model("Audition", auditionSchema);
// }
module.exports = Audition;
