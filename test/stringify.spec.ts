import stringify from '../src/strigify';
import {
  completeStructure,
  emptyStructure,
} from './__fixtures__/stringify.fixtures';

describe('Strigify', () => {
  it('Should stringify an empty structure', () => {
    const structure = emptyStructure;

    const result = stringify(structure);

    expect(result).toMatchSnapshot();
  });

  it('Should stringify a complete structure', () => {
    const structure = completeStructure;

    const result = stringify(structure);

    expect(result).toMatchSnapshot();
  });
});
