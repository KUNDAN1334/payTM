const express = require('express');

const router = express.Router();
const useRouter=require("./user");
const accountRouter=require("./account");


router.use("/user",useRouter);
router.use("/accounts",accountRouter);

module.exports = router;