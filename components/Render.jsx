import React from 'react';

import { useRouter } from 'next/router';
import Back from './Back';
import Link from 'next/link';

function Render({ data }) {
  const router = useRouter();
  function next() {
    console.log('Button Clicked');
  }
  console.log(data);
  return (
    <div className="px-5">
      <Back />
      <h1 className="text-5xl text-gray-800 font-inter font-bold tracking-wide lg:text-8xl">
        {router.pathname}
      </h1>
      <div className="pt-10 font-inter flex justify-between items-center text-xs lg:text-sm">
        <p className="bg-green-100 text-green-600 rounded-md px-2 ">
          Count {data.info.count}
        </p>
        <p className="bg-blue-100 text-blue-600 rounded-md px-2 ">
          {data.info.pages} Pages{' '}
        </p>
        <button onClick={next}>
          <p className="bg-yellow-100 text-yellow-600 rounded-md px-2 ">Next</p>
        </button>
        {data.info.prev && (
          <button>
            <p className="bg-yellow-100 text-yellow-600 rounded-md px-2 ">
              Prevt
            </p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Render;
