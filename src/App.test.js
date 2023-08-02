import inputSlice, { initialState, save, deleteItem, add } from './inputSlice';
import { renderWithProviders } from './utils-for-tests';
import { screen } from '@testing-library/react';

import App from './App';

describe('tests for input slice', () => {
  test('initalize slice with initialValue', () => {
    const inputSliceInit = inputSlice(initialState, { type: 'unknown' });
    expect(inputSliceInit).toBe(initialState);
  });

  test('adds empty string and null time on add', () => {
    const afterReducerOperation = inputSlice(initialState, add());
    expect(afterReducerOperation).toStrictEqual({ value: [['', null]] });
  });

  test('removes empty string and null arr and saves input on save action', () => {
    const testData = ['Alpha', Date.now()];
    const afterAddOperation = inputSlice(initialState, add());
    const afterSaveOperation = inputSlice(afterAddOperation, save(testData));
    expect(afterSaveOperation).toStrictEqual({ value: [testData] });
  });

  test('lists items in sequential order after adding & deletes item based on index', () => {
    const testData0 = ['Alpha', Date.now()];
    const testData1 = ['Beta', Date.now()];
    const testData2 = ['Gamma', Date.now()];

    const afterAddOperation0 = inputSlice(initialState, add());
    const afterSaveOperation0 = inputSlice(afterAddOperation0, save(testData0));
    const afterAddOperation1 = inputSlice(afterSaveOperation0, add());
    const afterSaveOperation1 = inputSlice(afterAddOperation1, save(testData1));
    const afterAddOperation2 = inputSlice(afterSaveOperation1, add());
    const afterSaveOperation2 = inputSlice(afterAddOperation2, save(testData2));

    expect(afterSaveOperation2).toStrictEqual({
      value: [testData0, testData1, testData2]
    });

    const afterDeleteOperation1 = inputSlice(
      afterSaveOperation2,
      deleteItem(1)
    );

    expect(afterDeleteOperation1).toStrictEqual({
      value: [testData0, testData2]
    });
  });
});

test('renders', () => {
  renderWithProviders(<App />);
  const heading = screen.getByText(/MY PROJECTS/i);
  expect(heading).toBeInTheDocument();
});
