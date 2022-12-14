import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="introduction-container flex">
      <div className="flex justify-around w-full h-full items-center">
        <div>
          <h1 className="text-8xl font-bold">Patrick Niyogitare</h1>
          <p className="text-4xl font-light text-center mt-10">
            Associate Senior Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
