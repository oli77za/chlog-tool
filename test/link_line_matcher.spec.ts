import linkLineMatcher from '../src/link_line_matcher';

describe('Link line matcher', () => {
  [
    {
      testName: 'Should match compare',
      line: '[1.2.3]: https://host/user/repo/compare/1.2.0...1.2.3',
      expected: {
        version: '1.2.3',
        content: '[1.2.3]: https://host/user/repo/compare/1.2.0...1.2.3',
        gitBaseHref: 'https://host/user/repo/',
      },
    },
    {
      testName: 'Should match release',
      line: '[1.2.3]: https://host/user/repo/releases/tag/1.2.0',
      expected: {
        version: '1.2.3',
        content: '[1.2.3]: https://host/user/repo/releases/tag/1.2.0',
        gitBaseHref: 'https://host/user/repo/',
      },
    },
    {
      testName: 'Should match base, with trailing slash',
      line: '[1.2.3]: https://host/user/repo/',
      expected: {
        version: '1.2.3',
        content: '[1.2.3]: https://host/user/repo/',
        gitBaseHref: 'https://host/user/repo/',
      },
    },
    {
      testName: 'Should match base, without trailing slash',
      line: '[1.2.3]: https://host/user/repo',
      expected: {
        version: '1.2.3',
        content: '[1.2.3]: https://host/user/repo',
        gitBaseHref: 'https://host/user/repo/',
      },
    },
    {
      testName: 'Should return null if no URL',
      line: '[1.2.3]:',
      expected: null,
    },
  ].forEach(({ testName, line, expected }) =>
    it(testName, () => {
      const result = linkLineMatcher(line);
      expect(result).toStrictEqual(expected);
    })
  );
});
