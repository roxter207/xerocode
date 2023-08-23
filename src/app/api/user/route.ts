import connectMongo from "@/lib/conn";
import Users from "../../../../model/Schema";
import { NextResponse } from "next/server";
import { Hash } from "crypto";
import { hash } from "bcryptjs";

export async function POST(request: any) {
  try {
    const { firstname, lastname, email, password } = await request.json();

    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectMongo();

    //check user exists
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    //hashpass:
    const hashpassword = await hash(password, 12);

    await Users.create({ firstname, lastname, email, password: hashpassword });
    const users = await Users.find({},{password:0});
    return NextResponse.json(users,{status:400})
   

    
    

  } catch (error) {
    console.log("Error in user/route.tsx", error);
    return NextResponse.json({ message: "An Error lol" }, { status: 500 });
  }
}
