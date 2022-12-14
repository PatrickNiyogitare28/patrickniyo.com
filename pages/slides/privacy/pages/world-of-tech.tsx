import React from 'react';

const TheWorldOfTech: React.FC = () => {
  return (
    <div className="introduction-container flex">
      <div className="flex justify-around w-full h-full items-center">
        <div className="px-[10%]">
          <h1 className="text-8xl font-bold text-center">
            The world of technology{' '}
          </h1>
          <p className="text-2xl text-center font-light mt-10 text-gray-300">
            {' '}
            &bdquo; The world of technology has seen tremendous growth and
            change over the past few decades. From the widespread adoption of
            personal computers and the internet, to the development of
            smartphones and other mobile devices, technology has become an
            integral part of our daily lives &bdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheWorldOfTech;
