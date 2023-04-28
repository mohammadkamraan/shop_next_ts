import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { requestHandler } from "../../../src/util/requestHandlers";
import nextAuth from "next-auth";

// interface Credentials {
//   username: string;
//   password: string;
//   endPoint: string;
// }

export const nextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password, endPoint } = credentials;
        try {
          const [response] =
            (await requestHandler) <
            { token: string } >
            {
              data: { username, password },
              method: "POST",
              url: endPoint,
            };
          return {
            user: {
              token: response.token,
              id: 6,
            },
          };
        } catch {
          throw new Error("something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    session(params) {
      return { ...params };
    },
    jwt(params) {
      return { ...params };
    },
  },
};

export default nextAuth(nextAuthOptions);
