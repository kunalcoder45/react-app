"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [users, setUsers] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      console.log(response.data);
      setUsers(response.data.users.slice(0, 5));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1>Docker</h1>
      <p>{users.id}</p>
      <p>This is Docker</p>
      <p>Docker is a platform for developing, shipping, and running applications in containers.</p>
      ---
      <h2>Users</h2>
      {users.length > 0? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>Name: {user.firstName} {user.lastName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}

    </div>
  )
}

export default Page