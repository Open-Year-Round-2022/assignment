import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export class UserModel {
  id = uuidv4();
  name = faker.name.lastName();
  alias = faker.name.firstName();
  avatarUrl = faker.image.avatar();
}