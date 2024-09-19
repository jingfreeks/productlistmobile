import React from 'react';
import { renderWithProviders } from "../../../service/testframework";
import {Product} from '../index';


describe('Product Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Product />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
