"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const CreateProduct = async ({ name: name, description: description, imageUrl: imageUrl, price: price }) => {
    const newProduct = await prisma.product.create({
        data: {
            name, description, imageUrl, price
        },
    });
}