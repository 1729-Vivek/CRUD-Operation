const express=require("express")


const {home,createUser, getUsers, deleteUser, editUser}=require("../controller/userController.js"); //  so our main processing way is controller:-> Route
                                                         // then Route:->Route :->  App



 const router=express.Router();
router.get("/",home);
router.post('/createUser',createUser)

router.get("/getUser",getUsers)

router.delete('/deleteuser/:id',deleteUser)

router.put('/edituser/:id',editUser)   //we are writing like edituser/:id because we have written "req.params.id"  in userController.js

module.exports=router;