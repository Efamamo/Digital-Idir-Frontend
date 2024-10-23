import React from 'react';

function Devider() {
  return (
    <div className="flex gap-4 my-4 items-center w-full">
      <div className="h-0.5 w-2/3 bg-gradient-to-r from-white to-black"></div>
      <h3 className="text-base font-semibold">Or</h3>
      <div className="h-0.5 w-2/3  bg-gradient-to-r from-black to-white"></div>
    </div>
  );
}

export default Devider;
