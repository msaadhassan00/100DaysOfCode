import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => {
          logout();
        }}
        className='bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
