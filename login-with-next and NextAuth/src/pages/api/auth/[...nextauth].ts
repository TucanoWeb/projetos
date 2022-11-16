import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)