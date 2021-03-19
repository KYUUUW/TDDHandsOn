const faker = require("faker"); // 임의의 문자열을 설정
const sut = require("./index");

/**
 * 반복 코드를 줄여서 테스트 케이스를 작성하는 방법
 */
test.each`
  source                 | expected
  ${"hello  world"}      | ${"hello world"}
  ${"hello   world"}     | ${"hello world"}
  ${"hello    world"}    | ${"hello world"}
  ${"hello     world"}   | ${"hello world"}
  ${"hello      world"}  | ${"hello world"}
  ${"hello       world"} | ${"hello world"}
`('sut transforms "$source" to "$expected"', ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});

test.each`
  source             | expected
  ${"hello\t world"} | ${"hello world"}
  ${"hello \tworld"} | ${"hello world"}
`(
  'sut transforms "$source" that contains \'\\t\' to "$expected"',
  ({ source, expected }) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
  }
);

test.each`
  source             | bannedWords              | expected
  ${"hello mockist"} | ${["mockist", "purist"]} | ${"hello *******"}
  ${"hello purist"}  | ${["mockist", "purist"]} | ${"hello ******"}
`(
  'sut transforms "$source" to "$expected"',
  ({ source, bannedWords, expected }) => {
    const options = { bannedWords };
    const actual = sut(source, options);
    expect(actual).toBe(expected);
  }
);

// 랜덤한 문자열 상황을 계속 만드는 방법
describe("given banned word", () => {
  const bannedWord = faker.lorem.word();
  const masked = "*".repeat(bannedWord.length);
  const source = `hello ${bannedWord}`;
  const options = { bannedWords: [bannedWord] };

  test(`"${bannedWord}" when invoke sut then it returns "hello ${masked}"`, () => {
    const actual = sut(source, options);
    expect(actual).toBe(`hello ${masked}`);
  });
});

test.each`
  source               | expected
  ${" hello world"}    | ${"hello world"}
  ${"  hello world"}   | ${"hello world"}
  ${"hello world "}    | ${"hello world"}
  ${"hello world  "}   | ${"hello world"}
  ${"  hello world  "} | ${"hello world"}
`('sut correctly trims "$source"', ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});
