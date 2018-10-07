import selectors from './index';

test('Combines the return values of selectors to form state', () => {
  const RETURN_VALUE_ONE = { ONE: 'ONE' };
  const RETURN_VALUE_TWO = { TWO: 'TWO' };
  const STATE = 'STATE';
  const selectorOne = jest.fn();
  const selectorTwo = jest.fn();
  const expectedResult = { ...RETURN_VALUE_ONE, ...RETURN_VALUE_TWO };
  const expectedSelectorOne = STATE;
  const expectedSelectorTwo = STATE;
  selectorOne.mockReturnValue(RETURN_VALUE_ONE);
  selectorTwo.mockReturnValue(RETURN_VALUE_TWO);

  const actualResult = selectors(selectorOne, selectorTwo)(STATE);
  const actualSelectorOne = selectorOne.mock.calls[0][0];
  const actualSelectorTwo = selectorTwo.mock.calls[0][0];

  expect(actualResult).toEqual(expectedResult);
  expect(actualSelectorOne).toBe(expectedSelectorOne);
  expect(actualSelectorTwo).toBe(expectedSelectorTwo);
});

test('Adds \'ownProps\' to the result', () => {
  const RETURN_VALUE = { key: 'value' };
  const selector = () => RETURN_VALUE;
  const OWN_PROPS = { ownPropsKey: 'ownPropsValue' };
  const expected = { ...RETURN_VALUE, ...OWN_PROPS };

  const actual = selectors(selector)(undefined, OWN_PROPS);

  expect(actual).toEqual(expected);
});
