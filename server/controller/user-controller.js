
import { response } from "express";
import TestUser from "../schema/user-schema.js";

export const addUser = async(req,res) => {
    const user  = req.body ;
    console.log(user)
  
    const newUser = new TestUser(user);

    try{
        await newUser.save();
    res.status(201).json(newUser);
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const    viewUser = async(req,res) => {
    try{
const users = await TestUser.find({});
res.status(200).json(users);
    }catch(error){response.status(404).json({message: error.message})}
}


export const getUser = async(req,res) => {
    try{
const user = await TestUser.find({_id:req.params.id});
console.log(user)
res.status(200).json(user);
    }catch(error){response.status(404).json({message: error.message})}
}

export const editUser = async(req,res) => {
    let user = req.body
    const editUser = new TestUser(user)
    try{
 await TestUser.updateOne({_id: req.params.id},editUser)
 res.status(201).json(editUser)
    }catch(error){response.status(409).json({message: error.message})}
}

export const DeleteUser = async(req,res) => {

    try{
 await TestUser.deleteOne({ _id: req.params.id})
 response.status(200).json({message: 'User deleted succesfully'})
    }catch(error){response.status(409).json({message: error.message})}
}
