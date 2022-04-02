import { UserModel } from "./User";
import { faker } from "@faker-js/faker";
import { ReplyModel } from "./Reply";
import { randRange } from "../utils/random";

export interface PostModelProps {
  createdAt: Date;
  user: UserModel;
  imageUrl: string;
  likers: UserModel[];
  content: string;
  replies: ReplyModel[];
}

export class PostModel {
  props: PostModelProps;
  constructor(props: PostModelProps) {
    this.props = props;
  }

  static createRandom() {
    const props: PostModelProps = {
      createdAt: new Date(Date.now() - randRange(0, 1000 * 60 * 60 * 24 * 2)),
      user: new UserModel(),
      imageUrl: faker.image.people(640, 480, true),
      likers: new Array(100)
        .fill(0)
        .splice(0, randRange(0, 30))
        .map(() => new UserModel()),
      content: faker.commerce.productDescription(),
      replies: new Array(100)
        .fill(0)
        .splice(0, randRange(0, 5))
        .map(() => new ReplyModel()),
    };
    return new PostModel(props)
  }
}
