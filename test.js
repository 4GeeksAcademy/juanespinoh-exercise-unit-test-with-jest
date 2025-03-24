const {
  fromDollarToYen,
  fromEuroToDollar,
  fromYenToPound,
} = require("./app.js");

// test("adds 14 + 9 to equal 23", () => {
//   let total = sum(14, 9);
//   expect(total).toBe(23);
// });

test("convierte 74 dolares y que sean 11,581 yenes", () => {
  
  expect(fromDollarToYen(74)).toBe(11581);
});

test("convierte 563 euros y que sean 602.41 dolres", () => {
  
  expect(fromEuroToDollar(563)).toBe(602.41);
});
test("convierte 113 yenes y que sean 98.31 british punds", () => {
  
  expect(fromYenToPound(113)).toBe(98.31);
});
