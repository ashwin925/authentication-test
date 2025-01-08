import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Home({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
