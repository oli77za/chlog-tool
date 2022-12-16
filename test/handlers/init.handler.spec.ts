const stringifyMock = jest.fn();
jest.mock('../../src/strigify', () => stringifyMock);

const writeSpy = jest
  .spyOn(process.stdout, 'write')
  .mockImplementation(() => true);

import init from '../../src/handlers/init.handler';

describe('Handlers / Init', () => {
  it('Should create an initialization', () => {
    stringifyMock.mockReturnValue('teststring');
    init({ giturl: 'testurl' } as any);
    expect(stringifyMock.mock.calls).toMatchSnapshot();
    expect(writeSpy.mock.calls[0][0]).toBe('teststring');
  });
});
