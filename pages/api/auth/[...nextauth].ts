import { axiosRequest } from "../../../src/axios/axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { requestHandler } from "../../../src/util/requestHandlers";
import nextAuth from "next-auth";
// import * as Auth from "../../../lib/auth";

interface Credentials {
  username: string;
  password: string;
  endPoint: string;
}

export const nextAuthOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        const { username, password, endPoint } = credentials as Credentials;
        try {
          const response = await requestHandler({
            body: { username, password },
            method: "POST",
            endPoint,
          });
          return {
            user: {
              token: response[0].token,
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
    session(params): any {
      return { ...params };
    },
    jwt(params: any): any {
      return { ...params };
    },
  },
};

export default nextAuth(nextAuthOptions);
