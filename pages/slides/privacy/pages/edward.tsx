import Image from 'next/image';
import React from 'react';

const EdwardSnowden: React.FC = () => {
  return (
    <div className="introduction-container flex">
      <div className="flex justify-around w-full h-full items-center">
        <div className="px-[15%]">
          <h1 className="text-8xl font-bold text-center">
            The Permanent Record{' '}
          </h1>
          <p className="text-2xl text-center font-light mt-10 text-gray-300 italic">
            {' '}
            &bdquo; People saying they do not care about rights to privacy
            because they do not have nothing to hide are no different than
            people saying I do not care about freedom of speech because I have
            nothing to say &bdquo;
          </p>

          <div className="flex gap-8">
            <div className="w-[max-content] border-4 border-white rounded-full">
              <Image
                src="/images/slides/privacy/snowden.webp"
                className="rounded-full"
                width={200}
                height={200}
              />
            </div>
            <div className="w-[40%]">
              <label className="fong-bold text-xl ">Edward Snowden</label>
              <p className="text-gray-500 text-sm mt-4">
                A former National Security Agency (NSA) contractor who became
                known for leaking classified information about the agency
                surveillance programs. In 2013, Snowden revealed that the NSA
                was collecting and storing vast amounts of personal data from
                individuals, including phone calls and internet activity. His
                disclosures sparked a global debate about surveillance and
                privacy. Snowden currently lives in Russia, where he has been
                granted asylum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdwardSnowden;
