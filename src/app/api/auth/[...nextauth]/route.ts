import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// route.ts
// route.ts
// import connectMongo from "../../../../lib/conn";
// import Users from "../../../../../model/Schema";
// import { hash } from "bcryptjs";
// import { NextApiRequest, NextApiResponse } from "next";
// import { authOptions } from "@/lib/auth";
// import NextAuth from "next-auth";

// // Handler for handling the POST request
// const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//     connectMongo().catch(error => res.json({ error: "Connection failed..!" }));

//     if (req.method == "POST") {
//         if (!req.body) return res.status(404).json({ error: "Don't have form data" });
//         const { firstname, lastname, email, password } = req.body;

//         // Check duplicate users
//         const checkExisting = await Users.findOne({ email });
//         if (checkExisting) return res.status(422).json({ message: "User already exists..!" });

//         Users.create(
//             { firstname, lastname, email, password: await hash(password, 12) },
//             function (err: any, data: any) {
//                 if (err) return res.status(400).json({ err });
//                 res.status(201).json({ status: true, user: data });
//             }
//         );
//     } else {
//         res.status(500).json({ message: "HTTP method not valid; only POST method is valid" });
//     }
// };

// // Use NextAuth for authentication
// const authHandler = NextAuth(authOptions);

// export { postHandler as POST, authHandler as GET, authHandler as AUTH };

