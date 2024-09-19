import React from 'react';
import { renderWithProviders } from "../../../service/testframework";
import {Productdetails} from '../index';

jest.mock('../../../service/slice/producSlice', () => ({
    useGetProdDetailsQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: {ids: []},
    }),
  }));
describe('Product Details Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Productdetails />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
