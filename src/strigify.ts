import { ChangelogStruct } from './parser';

const stringify = (structure: ChangelogStruct): string => {
  return (
    structure.introduction.join('\n') +
    '\n' +
    structure.unreleased.join('\n') +
    '\n' +
    structure.versions.reduce(
      (text, version) => (text += version.content.join('\n')),
      ''
    ) +
    '\n' +
    structure.links.reduce((text, link) => (text += link.content + '\n'), '')
  );
};

export default stringify;
