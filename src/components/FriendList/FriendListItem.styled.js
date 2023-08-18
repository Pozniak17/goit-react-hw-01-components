import { styled } from 'styled-components';

export const Item = styled.li`
  background-color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
  &:last-child {
    margin-bottom: 0;
  }

  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Status = styled.span`
  background-color: ${props => (props.$status ? 'green' : 'blue')};
  padding: ${props => props.theme.space[3]}px; //8px
  border-radius: ${props => props.theme.radii.round}; //50%
  margin-left: ${props => props.theme.spacing(3)}; //15px
  margin-right: ${props => props.theme.spacing(3)}; //15px
`;

export const Avatar = styled.img`
  background-color: #9c27b05c;
  border-radius: ${props => props.theme.radii.big}; //12px
  margin-top: ${props => props.theme.spacing(1)}; //5px
  margin-bottom: ${props => props.theme.spacing(1)}; //5px
`;

export const Name = styled.p`
  margin-left: ${props => props.theme.spacing(3)}; //15px
`;
