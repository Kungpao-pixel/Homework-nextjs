import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = "rahasiadong"

export const POST = async (req, { params }) => {

    try {
        
        const { email, password } = await req.json();
        const foundUser = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!foundUser) 
            throw {name : "Invalid Credentials"}
        const comparePassword = bcrypt.compareSync(password, foundUser.password);

        if(comparePassword) {
            
            const accessToken = jwt.sign({
                id : foundUser.id,
                email : foundUser.email

            }, SECRET_KEY)


            cookies().set({
                name : "accessToken",
                value : accessToken,
                maxAge : 60 * 60 * 24 * 30
            })

            return NextResponse.json ({
                message: "Login Successfull",
                accessToken
            }, {status : 200}) 

        } else {
            throw {name : "Invalid Credentials"}
        }                  

        return NextResponse.json({ message: "Success" })
    } catch (error) {

        if(error.name === "Invalid Credentials") {
            return NextResponse.json({ message: "Invalid Credentials" })
        } else { 
        return NextResponse.json({ message: "Internal Server Error" })
        }
    }
}
