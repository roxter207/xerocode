import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const authhandler = NextAuth(authOptions);
export { authhandler as GET, authhandler as POST };

