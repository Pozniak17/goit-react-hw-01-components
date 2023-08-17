import { styled } from 'styled-components';
import { getRandomHexColor } from 'components/utils/GetRandomHexColor';

export const Container = styled.section`
  width: 250px;
  margin: auto;
  text-align: center;
  background-color: white;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #585c61;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid grey;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;
