import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { IUser, UserModel } from "@/models/User/user-model";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await MongoConnect();

        const user: IUser | null = await UserModel.findOne({ email: credentials?.email });
        if (!user) return null; 

        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) return null; 

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.firstname,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) : Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) : Promise<Session> {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;       
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
