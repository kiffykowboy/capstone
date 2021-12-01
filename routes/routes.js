const express = require("express");
const router = express.Router();
const { list, create, show, update, remove } = require('../controllers/posts');

// list route

router.get("/myposts", list );

//show route
router.get("/myposts/:id", show);

//post route
router.post("/myposts", create);

// update route

router.put("/myposts/:id", update);

//delete

router.delete("/myposts/:id", remove);

module.exports = router;