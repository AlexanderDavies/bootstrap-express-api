const { copyFiles } = require('./copy-files');

jest.mock('ncp', () => jest.fn());

describe('Helper: Copy Files', () => {
  const testOptions = {
    targetDirectory: '',
    templateDirectory: ''
  };

  it('should copy the files', () => {
    expect(copyFiles(testOptions)).resolves.toEqual({});
  });
});
