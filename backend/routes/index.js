const express = require('express');

const router = express.Router();
const useRouter=require("./user");

module.exports = router;
router.use("/user",useRouter);