import React from 'react';
import {renderWithProviders} from '../../../service/testframework';
import {Product} from '../index';

jest.mock('../../../service/slice/producSlice', () => ({
  useGetProductQuery: () => ({
    isLoading: false,
    isSuccess: true,
    isError: false,
    data: {ids: []},
  }),
}));
describe('Product Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Product />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
