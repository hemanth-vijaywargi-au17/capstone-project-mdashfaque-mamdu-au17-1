import SignInButton from "./Buttons/SignInButton";
import SignOutButton from "./Buttons/SignOutButton";
import { useEffect, useState } from "react";
import { getUser, login, logout } from "../Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const {
    name,
    email,
    profilePicURL,
    createdPosts,
    readingList,
    likedPosts,
    followers,
    following,
    isLoading,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(login("google"));
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          {name ? (
            <>
              <img className="w-14 h-14 rounded-full" src={profilePicURL} alt="user pic"/>
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
