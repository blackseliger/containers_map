import ErrorRepository from '../app';

describe('check method translate', () => {
  test('translate must return value of error', () => {
    const expected = 'error #2';
    const test1 = new ErrorRepository();
    test1.translate(2);
    const received = test1.error;
    expect(received).toEqual(expected);
  });
  test('translate must return error with mes:Unknown error', () => {
    const test1 = new ErrorRepository();
    expect(() => {
      test1.translate(3);
    }).toThrow();
  });
});
