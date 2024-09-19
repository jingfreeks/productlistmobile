import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '@/component';
import {
  ContainerStyled,
  ImageContainerStyled,
  ImageStyled,
  TitleContainerStyled,
  DescriptionContainerStyled,
  ContainerCenterStyled
} from './styles';
import type {RoutesProps} from './types';
import {useGetProdDetailsQuery} from '@/service/slice/producSlice'
const Productdetails = (props: RoutesProps) => {
  const {route} = props || {};
  const {_id} = route?.params || {};

  const {
    data: prodDetails,
    isLoading,
  } = useGetProdDetailsQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string;
  }>({prodId: _id});
  if (isLoading) {
    return (
      <ContainerCenterStyled>
        <ActivityIndicator size={'large'} color="#0000ff" />
      </ContainerCenterStyled>
    );
  }
  return (
    <ContainerStyled>
      <ImageContainerStyled>
        <ImageStyled
          resizeMode={'stretch'}
          source={{
            uri: prodDetails?.image,
          }}
        />
      </ImageContainerStyled>
      <TitleContainerStyled>
        <Text TextMode="TextH1Title">{prodDetails?.title}</Text>
      </TitleContainerStyled>
      <DescriptionContainerStyled>
        <Text TextMode="Title">Description:</Text>
        <Text TextMode="TextNormalRegular">{prodDetails?.decription}</Text>
      </DescriptionContainerStyled>
      <DescriptionContainerStyled>
        <Text TextMode="Title">Category:</Text>
        <Text TextMode="TextNormalRegular">{prodDetails?.category}</Text>
      </DescriptionContainerStyled>
      <DescriptionContainerStyled>
        <Text TextMode="Title">Price:</Text>
        <Text TextMode="TextNormalRegular">₱{prodDetails?.price}</Text>
      </DescriptionContainerStyled>
    </ContainerStyled>
  );
};

export default Productdetails;
