import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className='bg-white my-5 hover:bg-gray-800 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
