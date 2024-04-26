import _ from "lodash";

const main = () => {
  const tests = [
    {
      input: [
        { width: 200, height: 300 },
        { width: 200, height: 150 },
        { width: 100, height: 100 },
      ],
      expected: 21460,
    },
  ];

  for (let i = 0; i < tests.length; ++i) {
    const { input, expected } = tests[i];
    const result = f(input);
    _.isEqual(result, expected)
      ? console.log("PASS")
      : console.log("FAIL: ", result, expected);
  }
};

const f = (input) => {
  let ans = 0;
  for (let i = 0; i < input.length; ++i) {
    const { width, height } = input[i];
    const rectArea = width * height;
    const ovalArea = Math.PI * (width / 2) * (height / 2);
    const greenArea = rectArea - ovalArea;
    ans += greenArea;
  }

  return Math.floor(ans);
};

main();
