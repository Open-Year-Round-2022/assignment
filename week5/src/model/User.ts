import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { db } from "../db";

type UserProps = Prisma.UserCreateInput;
export class User {
  props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  static async findById(id: string) {
    const r = await db.user.findUnique({
      where: {
        UserID: id,
      },
    });

    if (!r) {
      throw new Error("Not found");
    }
    return new User(r);
  }

  static async findByNameAndPw(name: string, pw: string) {
    const r = await db.user.findFirst({
      where: {
        Name: name,
        Password: pw,
      },
    });

    if (!r) {
      throw new Error("Not found");
    }
    return new User(r);
  }

  persist() {
    db.user.update({
      where: {
        UserID: this.props.UserID,
      },
      data: this.props,
    });
  }
}
