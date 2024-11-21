import Image from 'next/image';
import logo from '../../../public/logo.png';
import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header className='h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90'>
      {/* Ensure Wrapper is defined or replace it with a div */}
      <div className="container mx-auto px-4">
        <div className='flex justify-between py-5 items-center'>
          {/* Logo */}
          <Link className="hover:text-teal-700 duration-300" href="/">
            <div>
              <Image src={logo} alt='Panaverse dao' />
            </div>
          </Link>

          {/* Navigation Bar */}
          <ul className='flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16'>
            <li className='relative group cursor-pointer hover:text-teal-700'>
              <div className='flex gap-x-2 items-center'>
                <p>Courses</p>
                <svg
                  width="9"
                  height="7"
                  viewBox='0 0 9 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 1.55554L4.5 5.44443L8 1.55554'
                    stroke='black'
                    strokeWidth='2'
                  />
                </svg>
              </div>
            </li>
            <Link className="hover:text-teal-700 duration-300" href={"/blogs"}>
              <li>Blogs</li>
            </Link>
            <Link className="hover:text-teal-700 duration-300" href={"/videos"}>
              <li>Videos</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
