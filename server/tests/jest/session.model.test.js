const SessionModel = require("../../src/components/session/session.model");

const foo = SessionModel.makeSession({ username: "ben" });
const fooSignature = foo.makeSignature();

console.log(
  "SessionModel.parseSessionString(fooSignature)",
  SessionModel.parseSessionString(fooSignature)
);

// test("properly parses session string", () => {
//   expect(SessionModel.parseSessionString(fooSignature)).toBe({
//     username: "ben",
//     id: "b27a5092-99b4-47db-8361-88b14f37918b",
//     sessionHash:
//       "d2f5f13aba22a522068b96ea8b635a420e76f30d3b8e26f6126520f5326c9836",
//   });
// });

test("properly tests if signature validation works for correct signatures", () => {
  expect(SessionModel.isSignatureValid(fooSignature)).toBe(true);
});

const fakeFooString = `admin|0|0`;

test("properly tests if signature validation works for incorrect signatures", () => {
  expect(SessionModel.isSignatureValid(fakeFooString)).toBe(false);
});
