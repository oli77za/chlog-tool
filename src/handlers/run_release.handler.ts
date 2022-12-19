import fs from 'fs';
import yargs from 'yargs';

import parse, { ChangelogStruct } from '../parser';
import produceRelease from '../produce_release';
import stringify from '../strigify';

const runRelease = ({ input, replace, ver }: yargs.ArgumentsCamelCase<any>) => {
  const inputFile = replace || input || 0;

  const parsed = parse(fs.readFileSync(inputFile, 'utf-8'));
  const released: ChangelogStruct = produceRelease(ver, parsed);

  if (replace) {
    fs.writeFileSync(replace, stringify(released));
  } else {
    process.stdout.write(stringify(released));
  }
};

export default runRelease;
