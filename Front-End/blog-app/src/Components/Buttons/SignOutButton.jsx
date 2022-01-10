function SignOutBtn({method}) {
  return (
    <button onClick={method} className="border-2 border-gray-200 p-4 py-2 rounded-md text-lg hover:bg-slate-200 cursor-pointer">
      Sign Out
    </button>
  );
}

export default SignOutBtn;
