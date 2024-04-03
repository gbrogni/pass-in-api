import { prisma } from './../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: '3f290c56-906d-4ea1-80c7-12c0a7e6b78d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'The Unite Summit is a conference for developers, designers, and creators.',
            maximumAttendees: 100,
        }
    })
}

seed().then(() => {
    console.log('Seed completed.');
    prisma.$disconnect();
})