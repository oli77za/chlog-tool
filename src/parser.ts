export type ChangelogVersion = {
  version: string;
  date: string;
  content: string[];
};

export type ChangelogLink = {
  version: string;
  content: string;
  gitBaseHref: string;
};

export type ChangelogStruct = {
  introduction: string[];
  unreleased: string[];
  versions: ChangelogVersion[];
  links: ChangelogLink[];
};

enum PARSING_STATE {
  INTRODUCTION,
  UNRELEASED,
  VERSION,
  LINK,
}

const parseLine = (
  line: string,
  outputStruct: ChangelogStruct,
  currentState: PARSING_STATE
) => {
  let newState = currentState;
  if (line.match(/^## \[Unreleased\]/)) {
    newState = PARSING_STATE.UNRELEASED;
  }

  const versionMatch: RegExpMatchArray | null =
    line.match(/^## \[(.*)\] - (.*)/);
  if (versionMatch) {
    newState = PARSING_STATE.VERSION;
    outputStruct.versions.push({
      version: versionMatch[1],
      date: versionMatch[2],
      content: [],
    });
  }

  const linkMatch = line.match(/^\[(.*)\]: (.*)\/?(compare|releases)?.*/);
  if (linkMatch) {
    newState = PARSING_STATE.LINK;
    outputStruct.links.push({
      version: (linkMatch || [])[1],
      content: line,
      gitBaseHref: (linkMatch || [])[2],
    });
  }

  switch (newState) {
    case PARSING_STATE.INTRODUCTION:
      outputStruct.introduction.push(line);
      break;
    case PARSING_STATE.UNRELEASED:
      outputStruct.unreleased.push(line);
      break;
    case PARSING_STATE.VERSION:
      const currentVer =
        outputStruct.versions[outputStruct.versions.length - 1];
      currentVer.content.push(line);
      break;
    case PARSING_STATE.LINK:
  }

  return newState;
};

const parse = (changelogText: string): ChangelogStruct => {
  let state = PARSING_STATE.INTRODUCTION;
  const outputStruct: ChangelogStruct = {
    introduction: [],
    links: [],
    unreleased: [],
    versions: [],
  };

  changelogText.split(`\n`).forEach((line) => {
    state = parseLine(line, outputStruct, state);
  });

  return outputStruct;
};

export default parse;
