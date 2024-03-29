"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const CreateUser = async ({ email:email, username:username, password:password }:any) => {
    const user = await prisma.user.create({ data: { email, username, password } })
    console.log(user)
    return user
}

export const GetUser = async () => {
    const user = await prisma.user.findMany()
    console.log(user)
    return user
}