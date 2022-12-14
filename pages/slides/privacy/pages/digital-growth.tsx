import Image from 'next/image';
import React from 'react';

const DigitalGrowth: React.FC = () => {
  return (
    <div className="introduction-container flex">
      <div className="flex justify-around w-full h-full items-center">
        <div>
          <Image
            src="/images/slides/privacy/digital-growth.png"
            alt="Picture of the author"
            width={1000}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalGrowth;
