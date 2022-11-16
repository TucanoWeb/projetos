import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: 'R09DU1BYLUZPUnZ1aXY4SXl6VlowaDM0cEQ3R2pVQWIwYnE=',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)