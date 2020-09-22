const { parseArgs } = require('./parse-args');

describe('Helper: Parse Args', () => {
  it('should rename project name in package.json', () => {
    const res = parseArgs(['', '', '--git=yes', '--template=javascript', '--name=test']);
    expect(res).toEqual({ git: true, name: 'test', template: 'javascript' });
  });
});
