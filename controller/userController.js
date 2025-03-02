import { User } from "../Model/userModel.js";

export const registerUser = async(req, res) => {

    const {username, email, role, password} = req.body;

    try {
        if(
            !username ||
            !email ||
            !role ||
            !password 
        ){
            return res.status(400).send({message: "Complete All fields"})
        }

        let user = await User.findOne({email});
        if(user){
            return res.status(400).send({message: "User already exist!"})
        }

        user = new User({
            username,
            email,
            role,
            password
        });

        await user.save();

        return res.status(201).send({message: "User created successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
} 

export const loginUser = async(req, res) => {
    const {username, password} = req.body;

    try {
        if(
            !username ||
            !password
        ){
            return res.status(400).send({message: "Please enter all fields"})
        }

        const user = await User.findOne({username})
        if(!user){
            return res.status(400).send({message: 'User not exists'})
        }

        if(password !== user.password){
            return res.status(400).send({message: 'Wrong Password'})
        }

        res.status(200).send({message: 'Login Successfully'})
    } catch (error) {
        console.error('Error user login',error)
        res.status(500).send('Server error')
    }
}