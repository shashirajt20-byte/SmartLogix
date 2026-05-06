import prisma from "../services/prisma.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcrypt"

export async function signup(req, res){
    try {
        const {username, password, email, name, phone, address} = req.body;
        if(!username || !name || !email || !password || !phone || !address){
            return res.status(400).json({
                success : false,
                message: "All fields are required"
            })
        }
        const existusername = await prisma.User.findUnique({
            where : {username}
        })
        const existemail = await prisma.User.findUnique({
            where : {email}
        });
        const existingCustomerphone = await prisma.Customer.findUnique({
            where : {phone}
        });
        const existingDriverphone = await prisma.Driver.findUnique({
            where : {phone}
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
        if(phone.length < 10 || phone.length > 10){
            return res.status(400).json({
                success: false,
                message : "Phone no must be exact 10 digit"
            })
        }
        if(existingCustomerphone || existingDriverphone){
            return res.status(400).json({
                success: false,
                message: "Phone no already registered"
            })
        }
        const hashpassword = await bcrypt.hash(password,10);
        const user = await prisma.User.create({
            data : {
                username,
                passwordHash : hashpassword,
                email,
                fullName: name,
                roleId: 3
            }
        });
        if(user.roleId === 2){
            try {
                await prisma.Customer.create({
                    data: {
                        name,
                        address, 
                        phone,
                        email
                    }
                })
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message : error.message ?? "server error"
                })
            }
        }

        function  generateLicenseNumber(){
            return "LIC-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
        }

        if(user.roleId === 3){
            try {
                await prisma.Driver.create({
                    data: {
                        userId: user.id,
                        phone,
                        licenseNumber : generateLicenseNumber()
                    }
                })
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message : error.message ?? "server error"
                })
            }
        }
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
        const matchedPassword = await bcrypt.compare(password, user.passwordHash);
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
