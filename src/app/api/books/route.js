
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req, { params }) => {
    

    try {

        const data = await prisma.books.findMany();

        return NextResponse.json ( data, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" })
    }
}

export const POST = async (req, { params }) => {
    
    try {
        const { title, author, publisher, year, pages, imageUrl } = await req.json();

        console.log(title, author, publisher, year, pages, imageUrl);
        await prisma.books.create({
           data: {
            title,
            author,
            publisher,
            year: +year,
            pages: +pages,
            imageUrl
           }
        })        

        return NextResponse.json({message: "Success"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" })
    }
}