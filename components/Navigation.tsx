import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex md:gap-12 gap-6">
      <Link href="/">
        <a
          className="text-gray-500  dark:text-white  py-4"
          style={{ fontWeight: 'bolder' }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className="text-gray-500 dark:text-white  py-4"
          style={{ fontWeight: 'bolder' }}
        >
          About
        </a>
      </Link>
      <Link href="/publications">
        <a
          className="text-gray-500 dark:text-white  py-4"
          style={{ fontWeight: 'bolder' }}
        >
          Pubs
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
