const { promptForArgs } = require('./prompt-for-args');

jest.mock('inquirer', () => ({
  prompt: () => Promise.resolve({ name: 'test', git: true, template: 'javascript' })
}));

describe('Helper: Prompt For Args', () => {
  it('should rename project name in package.json', async () => {
    const res = await promptForArgs();
    expect(res).toEqual({ git: true, name: 'test', template: 'javascript' });
  });
});
