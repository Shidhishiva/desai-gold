import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'


let prisma = new PrismaClient()

export const authOptions = {
    secret: process.env.SECRET,

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, 
    },

    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials,req){
                const hpassword = bcrypt.hashSync(credentials.password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 



                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user) {
                    return null;
                }
                if(!(hpassword == user.secret)){
                    return null;
                }
                // console.log(credentials.email)
                return {
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],
    pages: {
        signIn: "/account/login",
    },
}

export default NextAuth(authOptions)