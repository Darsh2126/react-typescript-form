import React from "react";

const App: React.FC = () => {
  return (
    <>
    <header className="h-8 border border-green-300 flex items-center mb-2"> Header </header>
    <div className="container mx-auto px-4 flex items-center bg-gray-700 border border-sky-500 shadow-lg h-[calc(100vh-2.5rem)]">
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="w-full max-w-xs">
      <form className="bg-gray-700 rounded-md shadow-xl p-8">
        <div className="py-4">
        <input type="text" name='userName' placeholder="User Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="py-4">
        <input type="password" name='password' placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex w-full justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
        </div>
      </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default App;
