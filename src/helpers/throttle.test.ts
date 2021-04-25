import throttle from "./throttle";

jest.useFakeTimers();

describe('throttle()', () => {
  test('expect function to be called only once in 1000ms when throrrle value set to 1000ms', () => {
    const functionMock = jest.fn();
    const testThrottle = throttle(functionMock, 1000);

    testThrottle();
    testThrottle();
    testThrottle();
    testThrottle();

    jest.runAllTimers();

    expect(functionMock).toHaveBeenCalledTimes(1);
  });


  test('expect function to be called more then once in 1000ms when throrrle value set to 500ms', () => {
    const functionMock = jest.fn();
    const testThrottle = throttle(functionMock, 500);

    testThrottle();
    testThrottle();
    testThrottle();
    testThrottle();

    setTimeout(testThrottle, 600);

    jest.runAllTimers();

    expect(functionMock.mock.calls.length).toBeGreaterThan(1);
  });
});