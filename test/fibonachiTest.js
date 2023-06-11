let fibonachi = require('../index.js').fibonachi;
let assert = require('chai').assert;

describe('Fibonachi code testing', function() {
  it('posses number() method', function() {
    assert.equal(fibonachi.getNumberByPosition != undefined, true);
  })

  it('Number function testing 7-th number', function(){
    assert.equal(fibonachi.getNumberByPosition(7), 13)
  })

  it('Number function testing 10-th number', function(){
    assert.equal(fibonachi.getNumberByPosition(10), 55)
  })

  it('Number function testing 30-th number', function(){
    assert.equal(fibonachi.getNumberByPosition(30), 832040)
  })

  it('Number function incorrect value',function(){
  assert.equal(fibonachi.getNumberByPosition(5), 10)
  })

})
