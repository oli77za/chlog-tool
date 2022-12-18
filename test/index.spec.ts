const initHandlerMock = jest.fn();
jest.mock('../src/handlers/init.handler', () => initHandlerMock);

const parseHandlerMock = jest.fn();
jest.mock('../src/handlers/parse.handler', () => parseHandlerMock);

const runReleaseHandlerMock = jest.fn();
jest.mock('../src/handlers/run_release.handler', () => runReleaseHandlerMock);

const argsProviderMock = jest.fn();
jest.mock('../src/args_provider', () => argsProviderMock);

describe('Index', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should run init with no input', () => {
    argsProviderMock.mockReturnValue(['init', '-u', 'testurl']);
    return import('../src/index').then(() => {
      expect(initHandlerMock.mock.calls.length).toBe(1);
      expect(initHandlerMock.mock.calls[0][0]).toMatchObject({
        giturl: 'testurl',
        input: null,
      });
    });
  });

  it('Should run not run init without a url', () => {
    argsProviderMock.mockReturnValue(['node', 'index.js', 'init']);
    return import('../src/index').then(() => {
      expect(initHandlerMock.mock.calls.length).toBe(0);
    });
  });
});
