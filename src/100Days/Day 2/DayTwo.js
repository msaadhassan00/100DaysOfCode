import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import Index from "./Index";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const DayTwo = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Index />
    </Auth0Provider>
  );
};

export default DayTwo;
