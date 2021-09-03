const { test, assert } = require('../src/BoTest');
test(() => {
  assert('测试passed', 1 === 1);
  assert('测试error', 1 === 2);
})