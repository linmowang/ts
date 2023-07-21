import { type } from "os";

namespace record_readonly {
  type Re<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Person = {
    name: string;
    age: number;
    text: string;
  };

  type man = Readonly<Person>;
  type man2 = Re<Person>;

  type Reco<K extends keyof any, T> = {
    [P in K]: T;
  };

  type K = string | number | symbol;
  type K1 = "A" | "B" | "C";
  type K2 = 1 | 2 | 3;
  type B = Record<K, Person>;
  type B1 = Reco<K, Person>;
  type B2 = Reco<K1, Person>;
  type B3 = Reco<K2, Person>;

  let obj: B3 = {
    1: { name: "xiaoman", age: 22, text: "sanmiao" },
    2: { name: "xiaoman", age: 22, text: "sanmiao" },
    3: { name: "xiaoman", age: 22, text: "sanmiao" },
  };
}
