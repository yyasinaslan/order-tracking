import { MaskedNamePipe } from './masked-name.pipe';

describe('MaskedNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MaskedNamePipe();
    expect(pipe).toBeTruthy();
  });
});
