const { describle, assert } = require('../src/Best');
describle('测试Bset', () => {
  assert('测试passed', 1 === 1);
  assert('测试error', 1 === 2);
})