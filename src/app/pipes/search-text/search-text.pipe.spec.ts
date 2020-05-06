import { SearchTextPipe } from './search-text.pipe';

describe('SearchTextPipe', () => {
  let pipe: SearchTextPipe;
  const data = [
    { name: 'alver', total: 1 },
    { name: 'angie', total: 1 },
  ];

  beforeEach(() => {
    pipe = new SearchTextPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an array of one position', () => {
    expect(pipe.transform(data, { key: 'name', value: 'alver' })).toHaveLength(1);
  });

  it('should return the same array when not send arguments', () => {
    expect(pipe.transform(data, {} as any)).toEqual(data);
  });

  it('should return the same array when the length of the value is less than three', () => {
    expect(pipe.transform(data, { key: 'name', value: 'al' })).toEqual(data);
  });

  it('should return an array empty when send paramaters empty', () => {
    expect(pipe.transform(null, null)).toEqual([]);
  });
});
