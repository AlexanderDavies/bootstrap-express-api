const { installPackages } = require('./install-packages');

jest.mock('pkg-install', () => ({
  projectInstall: jest.fn().mockResolvedValue({})
}));

describe('Helper: Ininitalize Git', () => {
  const targetDirectory = '';

  it('should initialize git', () => {
    expect(installPackages(targetDirectory)).resolves.toEqual({});
  });
});
