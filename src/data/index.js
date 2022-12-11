import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// prisma.users
//   .findMany({
//     where: {
//       email: 'kaiquesprt@gmail.com',
//     },
//   })
//   .then(docs => console.log(docs))
//   .catch(err => console.error(err));

// try {
//   const response = await prisma.users.findMany({
//     where: {
//       email: 'kaiquesprt@gmail.com',
//     },
//   });

//   console.log(response);
// } catch (error) {
//   console.error(error);
// }
