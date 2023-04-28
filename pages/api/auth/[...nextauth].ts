import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { requestHandler } from "../../../src/util/requestHandlers";
import nextAuth from "next-auth";

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
  secret: "lskjflkasjflkjs",
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        const { username, password, endPoint } = credentials as Credentials;
        try {
          const [response] = await requestHandler<{ token: string }>({
            data: { username, password },
            method: "POST",
            url: endPoint,
          });
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
    session(params: any) {
      return { ...params };
    },
    jwt(params: any) {
      return { ...params };
    },
  },
};

export default nextAuth(nextAuthOptions);
