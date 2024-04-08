import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { usersListRequest } from "../store/actions/users";
import { Link } from "react-router-dom";

let timeout;

function UsersList(props) {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.users.usersList);
  const onlineUsers = useSelector(state => state.users.onlineUsers);
  const [search, setSearch] = useState('');

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(usersListRequest({
        search
      }))
    }, search ? 400 : 0)
  }, [search]);
  return (
    <>
      <div className="top">
        <input value={search} onChange={(ev) => setSearch(ev.target.value)} type="text" placeholder="Search"/>
        <a href="#" className="search"></a>
      </div>
      <ul className="people">
        {usersList.map((user) => (
          <li key={user.id} className="person" data-chat="person1">
            <Link to={`/users/${user.id}`}>
              <div className="avatar">
                <img src={user.avatar} alt=""/>
                <span className={`badge ${onlineUsers.includes(user.id) || user.status ? 'online' : 'offline'}`} />
              </div>
              <span className="name">
                {`${user.firstName} ${user.lastName}`}
              </span>
              <span className="time">2:09 PM</span>
              <span className="preview">I was wondering...</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
