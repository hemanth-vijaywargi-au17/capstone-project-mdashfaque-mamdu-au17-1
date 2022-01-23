import { FcGoogle } from 'react-icons/fc';
import './button.css';

function SignInButton({ method, name, children }) {
  return (
    <button
      onClick={method}
      className="flex items-center gap-3 border-2 border-gray-200 p-4 py-2 rounded-md text-lg hover:bg-slate-200 cursor-pointer custom-signin-btn"
    >
      {children}
      <div>
        <FcGoogle className="google-icon" size={28} />
        Sign In with {name}
      </div>
    </button>
  );
}

export default SignInButton;
