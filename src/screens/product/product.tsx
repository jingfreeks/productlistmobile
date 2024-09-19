import React, {useCallback} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {ContainerStyled, ContainerCenterStyled} from './styles';
import {List} from './component'
import {useProductDetails} from './hooks';
const Product = () => {
  const {product, isLoading} = useProductDetails();
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List cityId={item} />;
    },
    [],
  );
  if (isLoading) {
    return (
      <ContainerCenterStyled>
        <ActivityIndicator size={'large'} color="#0000ff" />
      </ContainerCenterStyled>
    );
  }
  return (
    <ContainerStyled>
      <FlatList
        data={product.ids}
        extraData={product.ids}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index.toString()}
      />
    </ContainerStyled>
  );
};

export default Product;
