import styled from 'styled-components/native';

export const ContainerStyled = styled.View`
  flex:1;
  background-color:#ffff;
`;

export const ContainerCenterStyled=styled(ContainerStyled)`
    align-items:center;
    justify-content:center
`
export const InfoContainerStyled = styled.View`
  padding: 5px;
`;

export const ActionButtonContainerStyled = styled.View`
  flex-direction: row;
`;

export const ImageContainerStyled = styled.View`
  align-items:center;
  justify-content:center;
`;

export const ImageStyled = styled.Image`
  width:90%;
  height:200px; 
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top:10px;
`;

export const TitleContainerStyled=styled.View`
  align-items:center;
  padding:10px;
`
export const DescriptionContainerStyled=styled.View`
  margin:10px;
`