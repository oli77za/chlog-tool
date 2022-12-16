import argsProvider from '../src/args_provider';

describe('Args provider', () => {
  it('Should return process argv', () => {
    process.argv = ['1', '2', '3'];
    const expected = argsProvider();
    expect(expected).toStrictEqual(['3']);
  });
});
