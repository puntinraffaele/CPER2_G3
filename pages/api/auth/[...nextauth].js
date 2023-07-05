import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers";

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { username, password } = credentials;
        if(username !== "dgobbo" || password !== "Vmware1!") return null;
        return "sium";
      }
    })
  ],
  pages: {
    login: '/login'
  }
}

export default NextAuth(authOptions)
