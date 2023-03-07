import React from 'react';

import { BackwardIcon } from '@heroicons/react/24/outline';

function Back() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="py-10 px-1">
      <div
        onClick={goBack}
        className="flex justify-center items-center font-mono bg-gray-100 w-32 rounded text-md cursor-pointer"
      >
        <span className="mr-2">
          <BackwardIcon className="h-10 w-10" />
        </span>
        Go back
      </div>
    </div>
  );
}

export default Back;
