const palindrome = require("./index");

test("palindrome function is defined", () => {
    expect(typeof palindrome).toEqual("function");
});

test('"aba" is a palindrome', () => {
    expect(palindrome("aba")).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
    expect(palindrome(" aba")).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
    expect(palindrome("aba ")).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
    expect(palindrome("greetings")).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
    expect(palindrome("1000000001")).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome("Fish hsif")).toBeFalsy();
});
test("123321 is  a palindrome number", () => {
    expect(palindrome(123321)).toBeFalsy();
});
test("1233221 is not a palindrome number", () => {
    expect(palindrome(1233221)).toBeFalsy();
});

test('"pennep" a palindrome', () => {
    expect(palindrome("pennep")).toBeTruthy();
});
