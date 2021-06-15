import Link from "next/link";
import { useState } from "react";

export const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-white border-b">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="font-poppins text-lg font-bold text-gray-700 hover:text-gray-900 lg:text-lg">Martin Au-yeung</a>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/aboutme">
                <a className="whitespace-nowrap font-poppins text-base font-medium text-gray-500 pr-6 hover:text-gray-900">
                  About Me
                </a>
              </Link>
              <Link href="/martin-auyeung-resume.pdf">
                <a className="font-poppins whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Resume
                </a>
              </Link>
              <a
                href="mailto:martin.auyeung1@gmail.com"
                className="font-poppins ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Me
              </a>
            </div>
            <div className="md:hidden justify-end relative pr-3 py-3 sm:max-w-xl">
              <nav x-data="{ open: false }">
                <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

                </button>
              </nav>
            </div>
            {mobileMenuOpen &&
              <div className="absolute top-0 inset-x-0 mt-20 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-indigo-100">
                  <div className="">
                    <div className="flex items-center justify-center">
                      <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                          <Link href="/aboutme">
                            <a className="whitespace-nowrap font-poppins text-center text-base font-medium text-gray-900 pr-6 hover:text-gray-900">
                              About Me
                            </a>
                          </Link>
                          <Link href="/martin-auyeung-resume.pdf">
                            <a className="whitespace-nowrap text-center font-poppins text-base font-medium text-gray-900 pr-6 hover:text-gray-900">
                              Resume
                            </a>
                          </Link>
                          <Link href="/aboutme">
                            <a className="whitespace-nowrap  text-center  font-poppins text-base font-medium text-gray-900 pr-6 hover:text-gray-900">
                              Contact Me
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </>
    </div>
  )
}