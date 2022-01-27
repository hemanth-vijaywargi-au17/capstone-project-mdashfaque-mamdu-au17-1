// Components
import GoogleSignInButton from "./Buttons/GoogleSignInButton";
// Redux
import { actions } from "../Redux";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const { name, email, profilePicURL, isLoading } = useSelector(
    (state) => state.app.user
  );

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(actions.login("google"));
  };

  const handleSignOut = () => {
    dispatch(actions.logOut());
  };

  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          {name ? (
            <>
              <img
                className="w-14 h-14 rounded-full"
                src={profilePicURL}
                alt="user pic"
              />
              <div className="text-xl">{name}</div>
              <div className="text-xl">{email}</div>
              <GoogleSignInButton
                signin={handleSignIn}
                signout={handleSignOut}
                isSignedIn={name !== null}
              />
            </>
          ) : (
            <GoogleSignInButton
              signin={handleSignIn}
              signout={handleSignOut}
              isSignedIn={name !== null}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SignIn;
