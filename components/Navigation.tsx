import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a
          className="text-gray-500  dark:text-white pr-6 py-4"
          style={{ fontWeight: 'bolder' }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className="text-gray-500 dark:text-white px-6 py-4"
          style={{ fontWeight: 'bolder' }}
        >
          About
        </a>
      </Link>
      <Link href="/publications">
        <a
          className="text-gray-500 dark:text-white px-6 py-4"
          style={{ fontWeight: 'bolder' }}
        >
          Publications
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
