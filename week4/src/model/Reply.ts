import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export class ReplyModel {
  id = uuidv4();
  username = faker.name.lastName();
  content = faker.lorem.lines(1);
}
