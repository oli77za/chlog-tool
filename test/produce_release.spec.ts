import produceRelease from '../src/produce_release';
import {
  emptyStructure,
  newInitStructure,
  structureWithOneLink,
} from './__fixtures__/produces_release.fixtures';

describe('Produce release', () => {
  it('Should produce a new release with the first link', () => {
    jest.useFakeTimers({ now: 1600000000000 });
    const inputStructure = emptyStructure;
    const version = '2.3.5';

    const expectedStructure = produceRelease(version, inputStructure);

    expect(expectedStructure).toMatchSnapshot();
  });

  it('Should produce a new release with a new link', () => {
    jest.useFakeTimers({ now: 1600000000000 });
    const inputStructure = structureWithOneLink;
    const version = '2.3.5';

    const expectedStructure = produceRelease(version, inputStructure);

    expect(expectedStructure).toMatchSnapshot();
  });

  it('Should produce a first release from a newly initialised CHANGELOG', () => {
    jest.useFakeTimers({ now: 1600000000000 });
    const inputStructure = newInitStructure;
    const version = '2.3.5';

    const expectedStructure = produceRelease(version, inputStructure);

    expect(expectedStructure).toMatchSnapshot();
  });
});
