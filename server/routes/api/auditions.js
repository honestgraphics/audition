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
    let data = await awsService.delete(req.query.filepath)
    auditionService.remove(req, res)   
  });

module.exports = router;