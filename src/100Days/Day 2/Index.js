import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import Data from "./Components/Data";

const Index = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="w-screen h-screen">
        <Data />
      </div>
    </>
  );
};

export default Index;
