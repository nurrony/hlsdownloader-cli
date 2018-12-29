import { expect } from 'chai';
import { prepareExtraParams } from './../src/lib';

describe('HLSDownloader Lib', () => {
  describe('#prepareExtraParams', () => {
    const input = {
      headers: '{"content-type": "application/json"}',
      auth: '{"Basic": "Barrer: <JSONTOKEN>"}'
    };
    const output = prepareExtraParams(input);

    it('should parse JSON String correctly', () => expect(output).to.be.an('object').and.to.be.not.null);

    it('should have all keys', () => expect(output).to.have.all.keys(Object.keys(output)));

    it('should be deeply equal to the input', () =>
      expect(output).to.deep.equal({
        headers: { 'content-type': 'application/json' },
        auth: { Basic: 'Barrer: <JSONTOKEN>' }
      }));

    it('should throw error on invalid input', () => {
      const invalidInput = { ...input, invalid: '{data: "has been passed into function"}' };
      expect(() => prepareExtraParams(invalidInput)).to.be.throw(Error);
    });
  });
});
