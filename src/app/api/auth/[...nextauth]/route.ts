import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const Authhandler = NextAuth(authOptions);
export { Authhandler as GET, Authhandler as POST };

