const sum = require("./sum.js");

test("adding 4 + 4 to Not equal 44", function() {

    expect(sum(1,2)).toBe(3);
    expect(sum(4,4)).not.toBe(44);

});