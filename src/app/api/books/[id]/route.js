import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req, { params }) => {
    try {
        const { id } = params;

        const data = await prisma.books.findUnique({
            where: {
                id: +id
            }
        })
        return NextResponse.json(data, {status: 200})  
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal Server Error"})
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        await prisma.books.delete({
            where: {
                id: +id
            }
        })
        return NextResponse.json({message: "Book Deleted"})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Internal Server Error"})
    }
}