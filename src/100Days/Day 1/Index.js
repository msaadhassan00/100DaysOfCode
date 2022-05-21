import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Index = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover " style={{backgroundImage: "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
      {!isAuthenticated && <h1 className="font-bold text-5xl text-white">User Login and Registration with Auth0</h1>}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </div>
  );
};

export default Index;
