import dayjs from 'dayjs';

import { ChangelogStruct } from './parser';

const computeHref = (
  newVersion: string,
  prevVersion?: string,
  gitBaseHref?: string
) => {
  return prevVersion
    ? `${gitBaseHref}/compare/${prevVersion}...${
        newVersion !== 'unreleased' ? newVersion : 'HEAD'
      }`
    : `${gitBaseHref}/releases/tag/${newVersion}`;
};

export default (
  newVersion: string,
  changelogStruct: ChangelogStruct
): ChangelogStruct => {
  const today = dayjs().format('YYYY-MM-DD');
  return {
    introduction: changelogStruct.introduction,
    unreleased: ['## [Unreleased]', ''],
    versions: [
      {
        version: newVersion,
        date: today,
        content: [
          `## [${newVersion}] - ${today}`,
          ...changelogStruct.unreleased.splice(1),
        ],
      },
      ...changelogStruct.versions,
    ],
    links: [
      {
        version: 'unreleased',
        gitBaseHref: changelogStruct.links[0]?.gitBaseHref || 'unknown',
        content: `[unreleased]: ${computeHref(
          'unreleased',
          newVersion,
          changelogStruct.links[0]?.gitBaseHref
        )}`,
      },
      {
        version: newVersion,
        gitBaseHref: changelogStruct.links[0]?.gitBaseHref || 'unknown',
        content: `[${newVersion}]: ${computeHref(
          newVersion,
          changelogStruct.links.filter(
            (link) => link.version !== 'unreleased'
          )[0]?.version,
          changelogStruct.links[0]?.gitBaseHref
        )}`,
      },
      ...changelogStruct.links.filter((link) => link.version !== 'unreleased'),
    ],
  };
};
