const router = require("express").Router();
const auditionService = require("../../service/auditionService");

// Matches with "/api/auditions"
router.route("/")
  .get(auditionService.findAll)
  .post(auditionService.create);

// Matches with "/api/auditions/:id"
router
  .route("/:id")
  .get(auditionService.findById)
  .put(auditionService.update)
  .delete(auditionService.remove);

module.exports = router;