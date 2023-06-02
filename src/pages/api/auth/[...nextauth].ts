import NextAuth ,{ NextAuthOptions } from 'next-auth'
import CredencialProviders from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredencialProviders({
            id: 'credentials',
            credentials: {
                email: {label: 'E-mail', type: 'email'},
                password: {label: 'Senha', type: 'password'}
            },
            //@ts-ignore
            authorize: async (credentials, req) => {
                const user = {
                    id: 123,
                    name: 'Arthur',
                    email: 'arthur@gmail.com',
                }
                if(user){
                    return user
                }
                return null
            }
        })
    ]
}

export default NextAuth(authOptions)