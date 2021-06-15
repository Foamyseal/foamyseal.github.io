import Link from "next/link";

export const Header = () => {
  return (
    <div className="relative bg-white border-b">
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a className="font-poppins text-lg font-bold text-gray-700 hover:text-gray-900">Martin Au-yeung</a>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/aboutme">
                <a className="whitespace-nowrap  font-poppins text-base font-medium text-gray-500 pr-6 hover:text-gray-900">
                  About Me
                  </a>
                </Link>
                <a href="#" className="font-poppins whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Resume
                </a>
                <a
                  href="mailto:martin.auyeung1@gmail.com"
                  className="font-poppins ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </>
    </div>
  )
}