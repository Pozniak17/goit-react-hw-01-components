import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
