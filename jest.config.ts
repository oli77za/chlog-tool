import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        classNameTemplate: '{suitename}',
        titleTemplate: '{title}',
        outputDirectory: 'test-reports',
      },
    ],
  ],
};

export default config;
