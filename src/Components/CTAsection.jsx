import React from 'react';

const CTAsection = () => {
  return (
    <div className="container flex flex-col items-center px-[5vw] max-w-[75rem] p-6 mx-auto rounded-lg shadow-lg bg-gradient-to-br from-main from-[30%] py-10 my-12 to-blue-800 bg-opacity-10 backdrop-blur-md">
      <div className="text-center animate-bounceIn">
        <p className="mb-4 text-2xl font-semibold text-white">
          Take the right step for your career
        </p>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="px-6 py-2 text-black transition duration-300 bg-yellow-400 border rounded-md shadow-md hover:bg-white border-primary"
        >
          Get Course Details Now!
        </a>
      </div>
    </div>
  );
};

export default CTAsection;
