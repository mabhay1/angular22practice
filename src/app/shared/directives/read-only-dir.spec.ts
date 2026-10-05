import { ReadOnlyDir } from './read-only-dir';

describe('ReadOnlyDir', () => {
  it('should create an instance', () => {
    const directive = new ReadOnlyDir();
    expect(directive).toBeTruthy();
  });
});
