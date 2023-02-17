import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import {ILog} from "@/models/Auth";

// const options: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//
//             credentials: {
//                 email: {
//                     label: "Email",
//                     type: "email",
//                     placeholder: "example@gmail.com",
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password",
//                 },
//             },
//
//             // TODO Запрос на логинизацию
//             async authorize(credentials, req) {
//                 const { username, password } = credentials as ILog;
//                 const res =
//                 return {
//                 }
//             }
//         })
//     ],
//
//     callbacks: {
//         async jwt({ token, user }) {
//             return { ...token, ...user };
//         },
//         async session({ session, token, user }) {
//             // Send properties to the client, like an access_token from a provider.
//             session.user = token;
//
//             return session;
//         },
//     },
//
//     pages: {
//         signIn: '/auth/login',
//     }
// };
