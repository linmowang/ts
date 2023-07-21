import { type } from "os";

namespace partial_pick {
  type Person = {
    name: string;
    age: string;
    text: string;
  };

  type Par<T> = {
    [P in keyof T]?: T[P];
  };

  // keyof Person === 'name'|'age'|'text'
  // P in 'name'|'age'|'text' === for in
  // T[P] === string
  type p = Partial<Person>;
  type p2 = Par<Person>;

  type Pi<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type p3 = Pick<Person, "age">;
  type p4 = Pi<Person, "age" | "name">;
  // type p5 = Pi<Person, "age" | "aaa">;
}
