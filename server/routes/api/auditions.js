const router = require("express").Router();
const auditionService = require("../../service/auditionService");
const awsService = require("../../service/awsService");

// Matches with "/api/auditions"
router.route("/")
  .get(auditionService.findAll)
  .post(auditionService.create);

// Matches with "/api/auditions/:id"
router
  .route("/:id")
  .get(auditionService.findById)
  .put(auditionService.update)
  .delete(async (req, res) => {
    console.log('delete', req.query.filepath)
    try {
      let data = await awsService.delete(req.query.filepath)
      auditionService.remove(req, res)
    }
    catch(e) {
      console.error('delete catch', e.message)
     throw e
    }
  });

// Matches with "/api/auditions/submit"
router
  .route("/submit")
  .post((req, res) => {
    console.log(req.body)
    res.send("SUCCESS SUBMIT")
  });

  router
  .route("/associate")
  .get(auditionService.findAll)

module.exports = router;