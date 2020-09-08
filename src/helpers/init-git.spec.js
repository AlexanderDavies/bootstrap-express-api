const { initGit } = require('./init-git');

jest.mock('execa', () => jest.fn().mockResolvedValue({}));

describe('Helper: Ininitalize Git', () => {
  const testOptions = {
    targetDirectory: '',
    templateDirectory: ''
  };

  it('should initialize git', () => {
    expect(initGit(testOptions)).resolves.toEqual({});
  });
});
