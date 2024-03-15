const express=require("express")


const {home,createUser, getUsers, deleteUser}=require("../controller/userController.js"); //  so our main processing way is controller:-> Route
                                                         // then Route:->Route :->  App



 const router=express.Router();
router.get("/",home);
router.post('/createUser',createUser)

router.get("/getUser",getUsers)

router.delete('/deleteuser/:id',deleteUser)



module.exports=router;