import _ from "lodash";

const main = () => {
  const tests = [
    {
      input: "world20congresss23",
      expected: 43,
    },
    {
      input:
        "P9jktv501L3x37245XbA7RQD213K8EiU672ZmWgY8OcN09FhSfBzVnGdIyHlMqCw6Xo248Rj3Ts5491Uh47Em7Pw5k1Qn8Lg3Ft9Yz0Kp8Bv2Nq7Ic4Dx6Jm3Gy1Ha4Ws2Vb5Lu9Or6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9Xq2Bv7Jc4Hx6Dm1Fg4It3Vy5Ws2Qp8Lu3Nn0Or8En3Km4Jg1Hb7Yv5Xs9Kp6Tn3Xm4Zg1Nh8Qw5Lr0Fe7Ks3Zx2Hb6Vn8Mj7Oa4Gp5Yn9X",
      expected: 45592,
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
  let current = 0;
  let i = 0;
  while (i < input.length) {
    const c = input[i];
    if (c >= "0" && c <= "9") {
      current = current * 10 + parseInt(c);
    } else {
      ans += current;
      current = 0;
    }

    i++;
  }

  ans += current;
  return ans;
};

main();
