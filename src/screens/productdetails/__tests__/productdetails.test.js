import React from 'react';
import { renderWithProviders } from "../../../service/testframework";
import {Productdetails} from '../index';


describe('Product Details Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Productdetails />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
