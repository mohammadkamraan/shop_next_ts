import { axiosRequest } from "../../../src/axios/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import * as Auth from "../../../lib/auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      async authorize(credentials) {
        console.log(credentials.endPoint);
        try {
          const { data } = await axiosRequest.post(credentials.endPoint, {
            data: {
              username: credentials.username,
              password: credentials.password,
            },
          });
          const user = {
            token: data.token,
          };
          return user;
        } catch (error) {
          console.log(
            "************************************************************",
            error.response.data,
            error.response.statusText
          );
          const errorMessage = error.response?.statusText ? error.response.statusText : "something went wrong";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.token) return true;

      return false;
    },
    async session({ session }) {
      session.user.isLoggedIn = true;
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  // use env variable in production
  secret: "looselipssinkships",
});
