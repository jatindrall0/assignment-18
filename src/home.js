import React from "react";

const Home = ({ user }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user?.email} 🎉</h2>
      <p>You are now logged in.</p>
    </div>
  );
};

export default Home;
