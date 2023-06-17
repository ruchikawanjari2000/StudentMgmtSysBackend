const express = require('express')
const router = express.Router();
const userController=require('../Controllers/user-controller');


router.post("/login",userController.userLogin)


module.exports=router;




