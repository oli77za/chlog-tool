import fs from 'fs';
import yargs from 'yargs';

import parse, { ChangelogStruct } from '../parser';
import produceRelease from '../produce_release';
import stringify from '../strigify';

const runRelease = ({ input, ver }: yargs.ArgumentsCamelCase<any>) => {
  const parsed = parse(fs.readFileSync(input ? (input as string) : 0, 'utf-8'));
  const released: ChangelogStruct = produceRelease(ver, parsed);
  process.stdout.write(stringify(released));
};

export default runRelease;
