import { assert } from 'chai'
import { prepareExtraParams, availableCommandPassed, execute } from "./../index";
describe('#prepareExtraParams', function() {
  it('should parse JSON String correctly', function() {
    const input = {
      headers: '{"content-type": "application/json"}',
      auth: '{"Basic": "Barrer: <JSONTOKEN>"}'
    }
    const comparedObj = JSON.parse(input)
    const output = prepareExtraParams(input)

    assert.typeOf(output, 'object', 'output an object')
    assert.deepEqual(output, comparedObj, 'both input and output should be deeply equal.')
    assert.include(Object.keys(output), ['header', 'auth'], 'contains keys properly')
  })
})
