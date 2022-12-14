import style from './style.module.css';

// розмітка li-шки
const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={style.item} id={id}>
      <span className={isOnline ? style.online : style.offline}>
        {isOnline}
      </span>

      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
