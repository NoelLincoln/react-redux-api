import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  console.log('fetched users', users[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User Manager</h1>
      <ul>
        {users.map((user, index) => (
        <li key={index}>
          <h4>{user.name.title}</h4>
          <p>First Name: {user.name.first}</p>
          <p>Last Name: {user.name.last}</p>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default HomePage;
