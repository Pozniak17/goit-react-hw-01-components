import { styled } from 'styled-components';

export const ProfileCard = styled.div`
  margin: 150px auto;
  width: 300px;
  text-align: center;
`;

export const Description = styled.div`
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #e0e7ef;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 1px solid #e0e7ef;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ProfileText = styled.p`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  color: #a2acb7;
`;

export const Stats = styled.ul`
  background-color: #f3f6f9;
  border: 1px solid #e0e7ef;
  display: flex;
  justify-content: space-evenly;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #a2acb7;
`;

export const Quantity = styled.span`
  font-weight: 700;
  margin-top: 10px;
`;
