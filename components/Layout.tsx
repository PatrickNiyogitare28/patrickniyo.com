import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://codeark-com.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className='shadow-sm'>
        <div className="max-w-5xl px-4 mx-auto">
          <div className="flex items-center justify-between py-2 cursor-pointer">
            <div style={{ width: '25%' }} className='flex justify-between items-center'>
              <Link href="/">
                <div className='bg-black border rounded-md flex items-center'>
                  <Image src="/images/logo.png" width="50" height="40" draggable="false" />
                </div >
              </Link>
              <Navigation />
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8 flex justify-around">
        <div className="max-w-5xl px-8 mx-auto ">
          Built with ❣️ by{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://twitter.com/niyogitare"
          >
            Patrick Niyogitare &copy; {new Date().getFullYear()}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
