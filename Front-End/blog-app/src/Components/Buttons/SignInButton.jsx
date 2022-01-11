function SignInButton({method,name,children}) {
  return (
    <button onClick={method} className="flex items-center gap-3 border-2 border-gray-200 p-4 py-2 rounded-md text-lg hover:bg-slate-200 cursor-pointer">
      {children}
      <div>Sign In with {name}</div>
    </button>
  );
}

export default SignInButton;
