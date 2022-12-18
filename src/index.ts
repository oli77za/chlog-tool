import yargs from 'yargs';

import argsProvider from './args_provider';
import init from './handlers/init.handler';
import parse from './handlers/parse.handler';
import runRelease from './handlers/run_release.handler';

yargs(argsProvider())
  .usage('Parses and updates changelog files\n\nUsage: $0 <command> [options]')
  .option('input', {
    alias: 'i',
    description: 'The input file to be used by the tool',
    default: null,
  })
  .command(
    'init',
    'Creates a new CHANGELOG.md file',
    {
      giturl: {
        alias: '-u',
        description:
          'The repository http URL for this project. This is going to be used to create the links in the changelog document',
        type: 'string',
        demandOption: true,
        nargs: 1,
      },
    },
    init
  )
  .command(
    'parse',
    'Parses a changelog file and returns the JSON document that represents it',
    {
      pretty: {
        type: 'boolean',
        default: false,
        nargs: 0,
      },
    },
    parse
  )
  .command(
    'release <ver>',
    'Updates a CHANGELOG to a new release, pushes the content of Unreleased into a version section',
    {},
    runRelease
  )
  .demandCommand(1, 1, 'You need to specify a command')
  .help().argv;
