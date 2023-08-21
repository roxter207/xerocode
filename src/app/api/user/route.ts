import connectMongo from "@/lib/conn";
import Users from "../../../../model/Schema";
import { NextResponse } from "next/server";

export async function POST(request:any){
    const {firstname,lastname,email,password} = await request.json();

    await connectMongo();
    await Users.create({firstname,lastname,email,password});
    return NextResponse.json({message:"User registered"},{status:201});
    
}