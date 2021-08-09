const { describle, assert } = require('../src/BoTest');
describle('测试BoTest', () => {
  assert('测试passed', 1 === 1);
  assert('测试error', 1 === 2);
})