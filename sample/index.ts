import { EntityAttribute } from "../src/decorator/attributes/Attribute";

class User {
  @EntityAttribute({
    type: "string",
    nullable: false,
  })
  name: string;
}

const user = new User();
console.log(user);
