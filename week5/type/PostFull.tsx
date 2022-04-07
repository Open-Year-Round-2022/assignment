import { Post, Reply, User } from "@prisma/client";


export type PostFull = Post & {
  User: User;
  PostLike: {
    User: User;
  }[];
  Reply: (Reply & {
    User: User;
  })[];
};
