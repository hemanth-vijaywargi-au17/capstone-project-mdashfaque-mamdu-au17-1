// Components
import SignInButton from "./Buttons/SignInButton";
import SignOutButton from "./Buttons/SignOutButton";
// Redux
import { userActions } from "../Redux/Slices/user";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const { name, email, profilePicURL, isLoading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(userActions.login("google"));
  };

  const handleSignOut = () => {
    dispatch(userActions.logOut());
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
              <SignOutButton method={handleSignOut} />
            </>
          ) : (
            <SignInButton method={handleSignIn} name="Google" />
          )}
        </>
      )}
    </div>
  );
}

export default SignIn;
