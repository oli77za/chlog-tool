import fs from 'fs';
import yargs from 'yargs';

import parseFunction from '../parser';

const parse = (argv: yargs.ArgumentsCamelCase) => {
  const parsed = parseFunction(
    fs.readFileSync((argv.input as string) || 0, 'utf-8')
  );
  process.stdout.write(
    JSON.stringify(parsed, null, argv.pretty ? 2 : undefined)
  );
};

export default parse;
