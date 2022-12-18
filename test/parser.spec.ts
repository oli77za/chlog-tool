import fs from 'fs';

import parse from '../src/parser';

describe('Parser', () => {
  it('Should parse file', () => {
    // Given
    const changelogText = fs.readFileSync(
      `${__dirname}/__fixtures__/TEST_CHANGELOG.md`,
      'utf-8'
    );

    // When
    const parsed = parse(changelogText);

    // Then
    expect(parsed).toMatchSnapshot();
  });

  it('Should parse a new initialised changelog', () => {
    // Given
    const changelogText = fs.readFileSync(
      `${__dirname}/__fixtures__/CHANGELOG_INIT.md`,
      'utf-8'
    );

    // When
    const expected = parse(changelogText);

    // Then
    expect(expected).toMatchSnapshot();
  });

  it('Should empty content', () => {
    // Given
    const changelogText = '';

    // When
    const parsed = parse(changelogText);

    // Then
    expect(parsed).toMatchSnapshot();
  });
});
