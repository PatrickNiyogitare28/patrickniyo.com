import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">HOME</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">ABOUT</a>
      </Link>
    </nav>
  );
};

export default Navigation;
