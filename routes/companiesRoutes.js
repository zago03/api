const express = require ("express");

const router = express.Router();

const { getUsers } = require("../controllers/companiesController");

router.get("/", getUsers);
router.get("/:id", getUsers);
router.post("/", createUsers);
router.delete("/:id", deleteUsers);
router.patch("/:id", updateUsers);

module.exports = router;