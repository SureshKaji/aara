"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const CreateUser = async ({ email, username, password }:any) => {
    const user = await prisma.user.create({ data: { email, username, password } })
    console.log(user)
    return user
}