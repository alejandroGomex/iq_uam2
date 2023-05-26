const bcrypt = require("bcryptjs");
const User = require("../models/users");

const getMe = async (req,res) => { 
    try{
        const {user_id}= req.user;
        const {response} = await User.findById(user_id);
        if(!response){
            return res.status(400).send({msg:"no se ha encontrado el usuario"});
        }
        res.status(200).send(response)
    }catch(error){
        res.status(500).send({msg:"Error en el servidor"})
    }
}

const getUser = async (req,res)=>{
    try{
        const {id}= req.params
        const response = await User.findById(id);
        if(!response){  
            return res.status(400).send({msg:"no se ha encontrado el usuario"});
    }
    res.status(200).send(response);

}catch(error){
    res.status(500).send({msg:"Error en el servidor"})  
}
}

const getUsers  = async (req,res ) =>{
    try{
        const{active} =req.query
        let response = null 
        if (active ===undefined){
            response = await User.find();

        }else{
            response = await User.find({active});
        }
        res.status(200).send(response);
    }catch(error){
        res.status(500).send({msg:"Error en el servidor"})
    }
}
const createUsers = async (req,res) =>{
    try{
        const userData = req.body;
        const user = new User({...userData,active:false})
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword  = await bcrypt.hash(userData.password,salt);
        user.password = hashPassword
        const userStored = await user.save();
        res.status(201).send(userStored)
    }catch(error){
        res.status(400).send({msg:"Error al crear el usuario"})
    }


}
