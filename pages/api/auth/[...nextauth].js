import { axiosRequest } from "../../../src/axios/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import * as Auth from "../../../lib/auth";

let userToken = null;

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      async authorize(credentials) {
        const body = {
          username: credentials.username,
          password: credentials.password,
        };
        try {
          const { data } = await axiosRequest({
            url: credentials.endPoint,
            method: "POST",
            data: body,
          });
          userToken = data.token;
          const user = {
            token: data.token,
          };
          return user;
        } catch (error) {
          const errorMessage = error.response?.statusText
            ? error.response.statusText
            : "something went wrong";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user && userToken) return true;
      return false;
    },
    async session({ session }) {
      session.user.isLoggedIn = true;
      session.user.token = userToken;
      session.user.id = +Math.random().toFixed(0);
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  // use env variable in production
  secret: "looselipssinkships",
});
