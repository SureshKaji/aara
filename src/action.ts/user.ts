"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const CreateUser = async () => {
    const user = await prisma.user.create({ data: { username: "kajan", password: "password", email: "kajan@prisma.com" } })
    console.log(user)
    return user
}