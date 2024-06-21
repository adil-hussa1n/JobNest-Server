import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test=((req,res) => {
    res.json({
        message:"hello API Is Working",
    });
  
});

export const updateUser =async(req,res)=>{

    const userId = req.params.id;
     try {
         if(req.body.password){
             req.body.password = bcryptjs.hashSync(req.body.password,10);
         }
         const updatedUser = await User.findByIdAndUpdate(
             userId,
             {    
                     username: req.body.username,
                     email : req.body.email,
                     password : req.body.password,
                     profilePicture: req.body.profilePicture,
                 
             },{new: true}
         )
         console.log(updateUser)
         res.status(200).json({
             data: updatedUser
         });
         
     } catch (error) {
         console.log(error);
     }
 
 }