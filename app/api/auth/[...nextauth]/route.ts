import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Guest Login",
      credentials: {},
      async authorize() {
        return { id: "guest", name: "Guest User" };
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
