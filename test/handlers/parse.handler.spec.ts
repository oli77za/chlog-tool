const readFileSyncMock = jest.fn().mockReturnValue('');
jest.mock('fs', () => ({
  readFileSync: readFileSyncMock,
}));

const parseFunctionMock = jest.fn().mockReturnValue({ foo: 'bar' });
jest.mock('../../src/parser', () => parseFunctionMock);

const writeSpy = jest
  .spyOn(process.stdout, 'write')
  .mockImplementation(() => true);

import parse from '../../src/handlers/parse.handler';

describe('Handlers / Parse', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Should parse from stdin', () => {
    const parseArgs = {} as any;
    parse(parseArgs);
    expect(readFileSyncMock.mock.calls[0][0]).toBe(0);
    expect(writeSpy.mock.calls).toMatchSnapshot();
  });

  it('Should parse from input file', () => {
    const parseArgs = { input: 'testinputfile' } as any;
    parse(parseArgs);
    expect(readFileSyncMock.mock.calls[0][0]).toBe('testinputfile');
    expect(writeSpy.mock.calls).toMatchSnapshot();
  });

  it('Should pretty print the output', () => {
    const parseArgs = { pretty: true } as any;
    parse(parseArgs);
    expect(writeSpy.mock.calls).toMatchSnapshot();
  });
});
