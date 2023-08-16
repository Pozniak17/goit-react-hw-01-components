import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  ProfileText,
  Stats,
  Item,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Item>
      </Stats>
    </ProfileCard>
  );
};
