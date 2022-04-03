import { faker } from "@faker-js/faker";
import { db } from "../src/db";
import { uuid } from "../src/utils/random";

const userId = "3251e83c";
const numPosts = 3;
(async () => {
  const user = await db.user.findUnique({
    where: {
      UserID: userId,
    },
  });

  if (!user) {
    console.log("No users");
    return;
  }

  for (let i = 0; i < numPosts; i++) {
    await db.post.create({
      data: {
        PostID: uuid(),
        CreatedAt: Date.now(),
        Content: faker.commerce.productDescription(),
        ImageURL: faker.image.people(),
        UserID: userId,
      },
    });
  }
})();
