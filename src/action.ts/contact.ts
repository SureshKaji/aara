import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Function to create a new contact form submission
export const CreateContactSubmission = async ({ firstName, lastName, email, phone, message }) => {
    const newContactSubmission = await prisma.contactUs.create({
        data: {
            firstName,
            lastName,
            email,
            phone,
            message
        },
    });
    return newContactSubmission;
};

// Function to retrieve all contact form submissions
export const GetAllContactSubmissions = async () => {
    const contactSubmissions = await prisma.contactUs.findMany();
    return contactSubmissions;
};
