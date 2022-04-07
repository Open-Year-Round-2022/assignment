import { Reply, User } from "@prisma/client";


export type ReplyFull = Reply & {
  User: User;
};
