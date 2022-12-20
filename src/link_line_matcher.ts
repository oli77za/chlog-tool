import { ChangelogLink } from './parser';

export default (line: string) => {
  const expressions = [
    /^\[(.*)\]: (.*)\/releases\/tag\/[^\/]+$/,
    /^\[(.*)\]: (.*)\/compare\/[^\/]+$/,
    /^\[(.*)\]: (.*[^/])\/?/,
  ];

  for (let i = 0; i < expressions.length; i++) {
    const match = line.match(expressions[i]);
    if (match) {
      return {
        version: match[1],
        content: line,
        gitBaseHref: `${match[2]}/`,
      } as ChangelogLink;
    }
  }

  return null;
};
