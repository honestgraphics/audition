const db = require("../models/auditionModel");

module.exports = {

    findAll: function(req, res) {
      console.log("req" +req);
      console.log("req.query: "+ req.query);
        db.Audition
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Audition
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        // console.log('Create >>>>>', req.body);
        db.Audition
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        console.log("about to update", req);
        db.Audition
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Audition
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getAssociateTracks: function(req, res){
        db.Audition
        .find({onManagerPage: false})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
    };