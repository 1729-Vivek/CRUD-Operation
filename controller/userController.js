const User=require('../models/userModel.js');


exports.home=(req,res)=>{
    res.send('Hello World!')
}


exports.createUser=async(req,res)=>{
    //extract info 

    try{
        const {name,email}=req.body;

        if(!name||!email)
        {
            throw new Error("Name and email are  required")
        }

        const userExists=User.findOne({email})

        if(userExists)
        {
            throw new Error("user already exists")
        }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success:true,
            message:"User Created Successfully",
            user
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.getUsers=async(req,res)=>{
    try{
            const users=await   User.find({})   //we are using  await because our database is at different place . and    we are using User by doing . with it will give all properties to use . the following  line will give the list of all users  . if we would have wanted some specific users based on any condition then we can include that condition in the find function
            if(!users)
            {
                throw new Error("There are no Users")
            }
            res.status(200).json({
                success:true,
                users
            })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}

exports.deleteUser=async(req,res)=>{  //we are using async we have to talk with database
    try{
            const userId=  req.params.id  //to get data  from url we use req.params.id
            const deleteduser=await User.findByIdAndDelete(userId);
            res.status(200).json({
                success:true,
                message:"User deleted Successfully",
                deleteduser
            })
    }   
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}