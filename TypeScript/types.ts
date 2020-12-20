/* enum type */
enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

const isAdmin = (arg : UserRoles) => arg === UserRoles.ADMIN
console.log(isAdmin(UserRoles.ADMIN))
console.log(UserRoles.USER)

/*
  inferred object type:
  const person: {
    name: string;
    age: number;
    arr: string[];
    tuple: (string | number)[];
    enum: Enum;
  };
*/
const x = {
  name: "test",
  age: 10,
  arr: ["string", "string"],
  tuple: [2, "abc"],
  enum: UserRoles.ADMIN,
}

/* function param types */
const y: {
  name: string;
  age: number;
  [key: string]: any;
  arr: string[];
  tuple: [number, string];
  any: any[];
  enum: UserRoles;
} = {
  name: "test",
  age: 10,
  arr: ["a", "b"],
  tuple: [1, "c"],
  any: [1, 2, "a", x],
  enum: UserRoles.USER,
};

y.tuple.push("a"); // not caught
// console.log(y);

/* union type */
function combine(arg1: number | string, arg2: number | string) {
  return typeof arg1 === "number" && typeof arg2 === "number"
    ? arg1 + arg2
    : arg1.toString() + arg2.toString();
}
// console.log(combine(1, 2));
// console.log(combine("a", "b"));

/* type alias */
type NewAlias = number | string;
type LiteralType = "Tom" | "Jerry";

/* Return types in functions */
function func(arg1: number, arg2: number): string {
  return (arg1 + arg2).toString();
}

/* void vs undefined return types */
function funcVoid(): void {}
function funcUndefined(): undefined {
  return;
}

/* function type */
let funcPointer: Function;
funcPointer = func;
funcPointer = funcVoid;
funcPointer = funcUndefined;

let funcPointerCustom: (arg1: number, arg2: number) => string;
funcPointerCustom = func;

function typedCallback(arg1: number, arg2: number, cb: (arg: number) => void) {
  return cb(arg1 + arg2);
}
// typedCallback(1, 2, (arg) => console.log(arg));

/*
  unknown type
  accepts any type but can not be referenced by defined types without type check
*/
let unknown: unknown;
let another: boolean;
unknown = 1;
unknown = "1";
if (typeof unknown === "boolean") another = unknown;

/* never type */
function err(message: string, code: number): never {
  throw { message, errorCode: code };
}

/* generics */
const map = new Map<string, any>();

class Base {}
class Child extends Base {}

function promFunc<T extends Base>(arg: T): Promise<T> {
  return new Promise((res, rej) => setTimeout(() => res(arg), 100));
}
promFunc(new Child());
