import { styled } from 'styled-components';

export const ProfileCard = styled.div`
  margin: 100px auto;
  width: 300px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Description = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding-top: ${props => props.theme.spacing(4)}; //20px
  padding-bottom: ${props => props.theme.spacing(4)}; //20px
  border: ${props => props.theme.borders.normal} #e0e7ef;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  border-radius: ${props => props.theme.radii.round}; //50%
  width: 200px;
  height: 200px;
  border: ${props => props.theme.borders.normal} #e0e7ef;
`;

export const Name = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: ${props => props.theme.spacing(4)}; //20px
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
`;

export const ProfileText = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
  &:last-child {
    margin-bottom: 0;
  }
  color: ${props => props.theme.colors.grey};
`;

export const Stats = styled.ul`
  background-color: #f3f6f9;
  border: ${props => props.theme.borders.normal} #e0e7ef;
  display: flex;
  justify-content: space-evenly;

  padding-top: ${props => props.theme.spacing(3)}; //15px
  padding-bottom: ${props => props.theme.spacing(3)}; //15px
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.grey};
`;

export const Quantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: ${props => props.theme.spacing(2)}; //10px
`;
