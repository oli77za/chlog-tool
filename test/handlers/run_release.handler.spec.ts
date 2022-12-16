const readFileSyncMock = jest.fn().mockReturnValue('');
jest.mock('fs', () => ({
  readFileSync: readFileSyncMock,
}));

const parseFunctionMock = jest.fn().mockReturnValue({ foo: 'bar' });
jest.mock('../../src/parser', () => parseFunctionMock);

const produceReleaseMock = jest.fn().mockReturnValue({
  introduction: [],
  links: [],
  unreleased: [],
  versions: [],
} as ChangelogStruct);
jest.mock('../../src/produce_release', () => produceReleaseMock);

const writeSpy = jest
  .spyOn(process.stdout, 'write')
  .mockImplementation(() => true);

import runRelease from '../../src/handlers/run_release.handler';
import { ChangelogStruct } from '../../src/parser';

describe('Handlers / Run release', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Should run a release from stdin', () => {
    const parseArgs = {} as any;
    runRelease(parseArgs);
    expect(readFileSyncMock.mock.calls[0][0]).toBe(0);
    expect(writeSpy.mock.calls).toMatchSnapshot();
  });

  it('Should run a release from file', () => {
    const parseArgs = { input: 'inputfile' } as any;
    runRelease(parseArgs);
    expect(readFileSyncMock.mock.calls[0][0]).toBe('inputfile');
    expect(writeSpy.mock.calls).toMatchSnapshot();
  });
});
