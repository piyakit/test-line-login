import LineProvider from "next-auth/providers/line";
import NextAuth from "next-auth"

export const authOptions = ({
    providers: [
        LineProvider({
            clientId: "U177af900032583f75c5b5911563660f7",
            clientSecret: "8f496b2b0a63edff36c195a7e60173b4"
        })
    ]
})


export default NextAuth(authOptions)
