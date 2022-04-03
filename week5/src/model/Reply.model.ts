import { Prisma } from "@prisma/client";
import { db } from "../db";
import { BaseModel } from "./Base.model";

type ReplyProps = Prisma.ReplyCreateInput;
type ReplyDelegate = Prisma.ReplyDelegate<undefined>;
export class ReplyModel extends BaseModel<ReplyDelegate, ReplyProps> {
  static repo() {
    return db.reply;
  }

  static map(props: ReplyProps) {
    return new ReplyModel(db.reply, props);
  }
}
