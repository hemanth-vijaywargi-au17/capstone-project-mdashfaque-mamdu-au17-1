import { FcGoogle } from "react-icons/fc";

function GoogleSignInButton({ signin, signout, isSignedIn }) {
  return (
    <>
      {isSignedIn ? (
        <button
          onClick={signout}
          className="flex items-center gap-3 border-2 border-gray-200 p-4 py-2 rounded-md text-lg hover:bg-slate-200 cursor-pointer"
        >
          <FcGoogle className="google-icon" size={25} />
          <span>Sign Out</span>
        </button>
      ) : (
        <button
          onClick={signin}
          className="flex items-center gap-3 border-2 border-gray-200 p-4 py-2 rounded-md text-lg hover:bg-slate-200 cursor-pointer"
        >
          <FcGoogle className="google-icon" size={25} />
          <span>Sign In with Google</span>
        </button>
      )}
    </>
  );
}

export default GoogleSignInButton;
