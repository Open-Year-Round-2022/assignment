import { Prisma } from "@prisma/client";
import { db } from "../db";
import { BaseModel } from "./Base.model";

type PostProps = Prisma.PostCreateInput;
type PostDelegate = Prisma.PostDelegate<undefined>;
export class PostModel extends BaseModel<PostDelegate, PostProps> {
  static repo() {
    return db.post;
  }

  static map(props: PostProps) {
    return new PostModel(db.post, props);
  }
}
