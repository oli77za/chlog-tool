import fs from 'fs';
import yargs from 'yargs';

import parse, { ChangelogStruct } from '../parser';
import produceRelease from '../produce_release';
import stringify from '../strigify';

const runRelease = (argv: yargs.ArgumentsCamelCase<any>) => {
  const parsed = parse(fs.readFileSync((argv.input as string) || 0, 'utf-8'));
  const released: ChangelogStruct = produceRelease(argv.ver, parsed);
  process.stdout.write(stringify(released));
};

export default runRelease;
