import { assert } from 'chai';
import { execFile } from 'child_process';
import path from 'path';
import pkg from './../package.json';

describe('HLSDownloader CLI', () => {
  beforeEach(function() {
    this.origArgv = process.argv;
    this.origExit = process.exit;
  });

  afterEach(function() {
    process.argv = this.origArgv;
    process.exit = this.origExit;
  });

  describe('#version', () => {
    const expected = `hlsdownloader cli version: ${pkg.version}`;
    it('should return the version passed as flag', cb => {
      const cp = execFile('node', [
        path.resolve(__dirname, '..', pkg.bin.hlsdl),
        '--version',
        'http://example.com/path/to/playlist.m3u8'
      ]);
      cp.stdout.on('data', data => {
        assert.equal(data.toString().replace(/\r\n|\n/g, ''), expected);
        cb();
      });
    });
    it('should return the version passed as first argument', cb => {
      const cp = execFile('node', [path.resolve(__dirname, '..', pkg.bin.hlsdl), 'version']);
      cp.stdout.on('data', data => {
        assert.equal(data.toString().replace(/\r\n|\n/g, ''), expected);
        cb();
      });
    });
  });

  describe('#help', () => {
    const expected = 'Usage:';
    it('should print the help passed as flag', cb => {
      const cp = execFile('node', [path.resolve(__dirname, '..', pkg.bin.hlsdl), '--help']);
      cp.stdout.on('data', data => {
        assert.include(data.toString(), expected);
        cb();
      });
    });

    it("should print the help passed 'help' as first arg", cb => {
      const cp = execFile('node', [path.resolve(__dirname, '..', pkg.bin.hlsdl), 'help']);
      cp.stdout.on('data', data => {
        assert.include(data.toString(), expected);
        cb();
      });
    });
  });
});
