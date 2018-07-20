const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auditionSchema = new Schema({

    // There are a number of entries here that are not required. These are elements 
    // that I am unsure are going to be required. 
    

  auditionedBy: { type: String, required: false },

  auditionDateSubmitted: { type: Date, default: Date.now },

  managerApprovalBy: {type: String, required: false},

// Temporary default date of Date.now to get started
  managerDateSubmitted: { type: Date, default: Date.now },

  auditionApprovalStatus: {type: Boolean, default: false},

 // Temporary means of holding a song, or at least s3 related info about a song
  auditionSongLink: {type: String},

  // can use this entry or internal mongo _id value for purpose of table
  auditionId: {type: String, required: false},

  songCategory: {type: String, required: true},

  ISRC: {type: String, required: true},

  recordLabel: {type: String, required: true},

  artist: {type: String, required: true},

  songTitle: {type: String, required: true},

  album: {type: String, required: true},

  filepath: {type: String, required: false},

  editAndDeleteLinks: {type: String, required: false}

});

const Audition = mongoose.model("Audition", auditionSchema);

module.exports = Audition;
