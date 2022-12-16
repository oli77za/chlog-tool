import { ChangelogStruct } from '../../src/parser';

export const emptyStructure: ChangelogStruct = {
  introduction: [],
  links: [],
  unreleased: [],
  versions: [],
};

export const completeStructure: ChangelogStruct = {
  introduction: [
    '# Changelog',
    '',
    'All notable changes to this project will be documented in this file.',
    '',
    'The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),',
    'and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).',
    '',
  ],
  links: [
    {
      version: 'unreleased',
      content: '[unreleased]: https://github.com/oli77za/chlog-tool',
      gitBaseHref: 'https://github.com/oli77za/chlog-tool',
    },
    {
      version: '1.1.1',
      content: '[X.Y.Z]: https://github.com/oli77za/chlog-tool/foo',
      gitBaseHref: 'different_value',
    },
  ],
  unreleased: [
    '## [Unreleased]',
    '',
    '### Added ',
    '',
    '- Initial implementation',
    '',
  ],
  versions: [
    {
      version: '0.0.0',
      date: '2222-22-22',
      content: ['## [X.Y.Z] 0000-00-00', '', 'Lorem ipsum'],
    },
  ],
};
