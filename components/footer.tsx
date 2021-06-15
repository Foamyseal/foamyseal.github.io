import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative bg-white border-t">
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a className="text-lg font-light text-gray-700">© 2021 Martin Au-yeung</a>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="pr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Resume
                </a>
                <a href="#" className="pr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  GitHub
                </a>
                <a href="#" className="pr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  LinkedIn
                </a>
                <a href="#" className="pr-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Email
                </a>
              </div>
            </div>
          </div>
        </>
    </div>
  )
}