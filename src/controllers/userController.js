import User from '../models/userModel.js'

const createUser = async(req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(200).send(user);
    }catch(error){
        res.status(400).send(error)
    }
}

const getUsers = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send(users);
    }catch(error){
        res.status(500).send(error)
    }
}

export {createUser,getUsers}