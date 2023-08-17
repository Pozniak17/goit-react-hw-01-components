import { styled } from 'styled-components';
import { getRandomHexColor } from 'components/utils/GetRandomHexColor';

export const Container = styled.section`
  width: ${props => props.theme.sizes[1]}px; //300
  margin: auto;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing(4)}; //20px
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #585c61;
  font-weight: ${props => props.theme.fontWeights.medium}; //500
  padding-top: ${props => props.theme.spacing(4)}; //20px
  padding-bottom: ${props => props.theme.spacing(4)}; //20px
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: ${props => props.theme.spacing(12)}; //60px
  height: ${props => props.theme.spacing(12)}; //60px
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs}; //12px
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.m}; //18px
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
