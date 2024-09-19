import React from 'react';
// import {View,Text} from 'react-native';
import {Text} from '@/component';

import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
  ImageContainerStyled,
  ImageStyled,
} from './styles';
import {useProductDetails} from '@/screens/product/hooks'
const ListItem = (props: {item: any}) => {
  const {item} = props;
  const {navigation}=useProductDetails()

  return (
    <ContainerStyled onPress={()=>navigation.navigate('Productdetails',item)}>
      <ImageContainerStyled>
        <ImageStyled
          resizeMode={'stretch'}
          source={{
            uri: item?.image,
          }}
        />
      </ImageContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="TextH1Title">{item?.title}</Text>
        <Text TextMode="Title">₱{item?.price}</Text>
      </InfoContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
