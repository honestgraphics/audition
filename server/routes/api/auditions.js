const router = require("express").Router();
const auditionService = require("../../service/auditionService");

// Matches with "/api/books"
router.route("/")
  .get(auditionService.findAll)
  .post(auditionService.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(auditionService.findById)
  .put(auditionService.update)
  .delete(auditionService.remove);

module.exports = router;