import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new DateAgoPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 0', () => {
    const pipe = new DateAgoPipe();
    expect(pipe.transform(0)).toEqual(0);
  });

  it('should return just now', () => {
    const pipe = new DateAgoPipe();
    expect(pipe.transform(new Date())).toEqual('Just now');
  });

  it('should return 3 minutes ago', () => {
    const pipe = new DateAgoPipe();
    expect(pipe.transform(+new Date() - (1000 * 60 * 3))).toEqual('3 minutes ago');
  });

  it('should return 1 hour ago', () => {
    const pipe = new DateAgoPipe();
    expect(pipe.transform(+new Date() - (1000 * 60 * 60))).toEqual('1 hour ago');
  });
});
