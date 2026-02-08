import { IUser } from "@/models/User/user-model";
import { GetUserByEmail } from "@/services/user-service/user.service";
import { compare } from "bcrypt";
import { ObjectId } from "mongoose";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const runtime = "nodejs";

const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "your password",
        },
      },
      authorize: async (creds) => {
        if (!creds?.email || !creds.password) {
          throw new Error("Missing credentials");
        }
        console.log(creds);
        const user: IUser = await GetUserByEmail(creds.email);
        console.log(user);
        if (!user) {
          throw new Error("Invalid credentials");
        }

        const correctPass = await compare(creds.password, user.password);
        console.log(correctPass);
        if (!correctPass) {
          throw new Error("Invalid credentials");
        }

        return {
          id: (user._id as unknown as ObjectId).toString(),
          name: user.username,
          email: user.email,
          image: `/api/users/image/${user.imageGuid}`,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name!;
        session.user.email = token.email;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
