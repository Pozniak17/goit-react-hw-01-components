import { styled } from 'styled-components';

export const Item = styled.li`
  background-color: white;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Status = styled.span`
  background-color: ${props => (props.status ? 'green' : 'blue')};
  padding: 8px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Avatar = styled.img`
  background-color: #9c27b05c;
  border-radius: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  margin-left: 15px;
`;
