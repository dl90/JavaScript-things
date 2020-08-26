"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["ADMIN"] = 99] = "ADMIN";
    Enum[Enum["USER"] = 100] = "USER";
    Enum[Enum["READONLY"] = 101] = "READONLY";
})(Enum || (Enum = {}));
const x = {
    name: "test",
    age: 10,
    arr: ["string", "string"],
    tuple: [2, "abc"],
    enum: Enum.ADMIN,
};
const y = {
    name: "test",
    age: 10,
    arr: ["a", "b"],
    tuple: [1, "c"],
    any: [1, 2, "a", x],
    enum: Enum.USER,
};
console.log(y);
y.tuple.push("a");
function combine(arg1, arg2) {
    return typeof arg1 === "number" && typeof arg2 === "number"
        ? arg1 + arg2
        : arg1.toString() + arg2.toString();
}
console.log(combine(1, 2));
console.log(combine("a", "b"));
function func(arg1, arg2) {
    return (arg1 + arg2).toString();
}
function funcVoid() { }
function funcUndefined() {
    return;
}
let funcPointer;
funcPointer = func;
funcPointer = funcVoid;
funcPointer = funcUndefined;
let funcPointerCustom;
funcPointerCustom = func;
function typedCallback(arg1, arg2, cb) {
    return cb(arg1 + arg2);
}
typedCallback(1, 2, (arg) => console.log(arg));
let unknown;
let another;
unknown = 1;
unknown = "1";
if (typeof unknown === "boolean")
    another = unknown;
function err(message, code) {
    throw { message, errorCode: code };
}
