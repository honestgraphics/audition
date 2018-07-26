const router = require("express").Router();
const awsService = require("../../service/awsService");

// Matches with "/api/aws"
router.route("/")
  // .get(awsService.findAll)
  .post(awsService.upload);  // post.axios/api/aws 

// Matches with "/api/aws/:id"
router
  .route("/:id")
  .get(awsService.findById)
  .put(awsService.update)
  .delete(awsService.remove);

module.exports = router;