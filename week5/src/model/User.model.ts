import { Prisma } from "@prisma/client";
import { db } from "../db";
import { BaseModel } from "./Base.model";

type UserProps = Prisma.UserCreateInput;
type UserDelegate = Prisma.UserDelegate<undefined>;
export class UserModel extends BaseModel<UserDelegate, UserProps> {
  static repo() {
    return db.user;
  }

  static map(props: UserProps) {
    return new UserModel(db.user, props);
  }
}
