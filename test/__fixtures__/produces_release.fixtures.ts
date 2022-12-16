export const newInitStructure = {
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
  ],
  unreleased: [
    '## [Unreleased]',
    '',
    '### Added ',
    '',
    '- Initial implementation',
    '',
  ],
  versions: [],
};

export const emptyStructure = {
  introduction: [],
  unreleased: [],
  versions: [],
  links: [],
};

export const structureWithOneLink = {
  introduction: [],
  unreleased: [],
  versions: [],
  links: [
    {
      version: '1.0.0',
      content: "I don't care",
      gitBaseHref: 'gitBaseHref',
    },
  ],
};
