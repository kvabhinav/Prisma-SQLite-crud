import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

//give the userId here
let userId = 3

async function main() {

    const deletedProfile = prisma.profile.delete({
        where: {
            userId: userId
        }
    })

    const deletedPosts = prisma.post.deleteMany({
        where: {
            authorId: userId
        }
    })

    const deletedUser = prisma.user.delete({
        where: {
            id: userId
        }
    })

    const transaction = await prisma.$transaction([deletedProfile, deletedPosts, deletedUser])
    console.log(transaction)
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})