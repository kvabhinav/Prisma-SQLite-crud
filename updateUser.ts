import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const updatedUser = await prisma.user.update({
        where: {
            email: 'liam@prisma.io'
        },
        data: {
            name: "Liam Payne"
        }
    })

    console.log(updatedUser)
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})