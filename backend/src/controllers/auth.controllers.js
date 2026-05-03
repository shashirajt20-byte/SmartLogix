import prisma from "../services/prisma.js";
import { generateToken } from "../utils/token.js";

export async function signup(req, res){
    try {
        const {username, password, email, name} = req.body;
        const existusername = await prisma.User.findUnique({
            where : {username}
        })
        const existemail = await prisma.User.findUnique({
            where : {email}
        });
        if(existusername){
            return res.status(400).json({
                success : false,
                message : "username already exist"
            })
        }
        if(existemail){
            return res.status(400).json({
                success : false,
                message : "email already exist"
            })
        }
        const hashpassword = await bcrypt.hashpassword(password,10);
        const user = await prisma.User.create({
            data : {
                username,
                password : hashpassword,
                email,
                name
            }
        });
        const token = generateToken({
            id : user.id
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure : true,
            sameSite: "none"
        });
        return res.status(201).json({
            success : true,
            message : "User registerd successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message : error.message ?? "server error"
        })
    }
}

export async function singin(req, res){
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "Fill all required values"
            });
        }
        const user = await prisma.User.findUnique({
            where : {email}
        });
        if(!user){
            return res.status(400).json({
                success : false,
                message: "Invalid email"
            })
        }
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword){
            return res.status(400).json({
                success : false,
                message : "Invalid password"
            })
        }
        const token = generateToken({
            id: user.id
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });
        return res.status(200).json({
            success : true,
            message : "Successfully signed in"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message: error.message ?? "Server error"
        })
    }
}