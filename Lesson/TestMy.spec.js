import { fib } from "./TestMy";

it("test testCount", () => {
  expect(fib(3)).toBe(2);
  expect(fib(7)).toBe(13);
  expect(fib(77)).toBe(5527939700884757);
});
