import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className='flex flex-col items-center  text-white'>
          {user?.picture && <img src={user.picture} className='w-28 mt-9 rounded-full' alt={user?.name} /> } 
          <h2 className='text-3xl font-bold cursor-pointer'>{user?.name}</h2>
          <ul className='flex flex-col items-center justify-center'>
              {Object.keys(user).map((objKey,i)=>
                  <li key={i}>{objKey}:{user[objKey]}</li>
              )}
          </ul>
      </article>
    )
  );
};

export default Profile;
