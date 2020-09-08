const { editPackageJson, editOpenApiYaml, renameProject } = require('./rename-project');

jest.mock('js-yaml', () => ({
  safeLoad: jest.fn().mockReturnValue({ info: { title: 'test' } }),
  safeDump: jest.fn().mockReturnValue({ info: { title: 'test' } })
}));

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(JSON.stringify({ testValue: 'test' })),
  writeFileSync: jest.fn().mockReturnValue(JSON.stringify({ testValue: 'test' }))
}));

describe('Helper: Reaname Project', () => {
  const projectName = '';

  it('should rename project name in package.json', () => {
    expect(editPackageJson(projectName)).toEqual('{"testValue":"test"}');
  });

  it('should rename title in open-api.yml', () => {
    expect(editOpenApiYaml(projectName)).toEqual('{"testValue":"test"}');
  });

  it('should rename title in open-api.yml and package.json', () => {
    expect(renameProject(projectName)).toEqual(true);
  });
});
