import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status online={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="54" />
      <Name>{name}</Name>
    </Item>
  );
};
