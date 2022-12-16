import yargs from 'yargs';

import { ChangelogStruct } from '../parser';
import stringify from '../strigify';

const init = (argv: yargs.ArgumentsCamelCase<any>) => {
  const structure: ChangelogStruct = {
    introduction: [
      '# Changelog',
      '',
      'All notable changes to this project will be documented in this file.',
      '',
      'The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),',
      'and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).',
      '',
    ],
    unreleased: [
      '## [Unreleased]',
      '',
      '### Added ',
      '',
      '- Initial implementation',
    ],
    versions: [],
    links: [
      {
        gitBaseHref: argv.giturl as string,
        version: 'unreleased',
        content: `[unreleased]: ${argv.giturl}`,
      },
    ],
  };

  process.stdout.write(stringify(structure));
};

export default init;
