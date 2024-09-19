import React from 'react';
import {useGetProductQuery,} from '@/service/slice/producSlice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {cityId: string}) => {
  const {cityId} = props;
  const {product} = useGetProductQuery('getState', {
    selectFromResult: ({data}: any) => ({
      product: data?.entities[cityId],
    }),
  });
  return (
    <ListItemContainerStyled>
      <ListItem item={product} />
    </ListItemContainerStyled>
  );
};
export default List;
