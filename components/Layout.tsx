import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://codeark-com.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="gradient-header">
        <div className="max-w-5xl px-4 mx-auto ">
          <div className="flex items-center justify-between py-2 cursor-pointer">
            <div style={{}} className="flex justify-between items-center ">
              <Link href="/">
                <div className="bg-black logo-wrapper  w-[40px] justify-around h-[40px] rounded-full flex items-center">
                  <label className=" text-center text-white">PN</label>
                </div>
              </Link>
              <div className="ml-[2em]">
                <Navigation />
              </div>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="md:max-w-5xl px-8 py-4 mx-auto overflow-x-hidden">
          {children}
        </div>
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
