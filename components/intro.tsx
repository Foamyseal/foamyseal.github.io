import { toggleTheme } from "../pages/_document"

export const Intro = () => {
    return (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-center lg:w-0 lg:flex-1">
                <div className="max-w-xl mx-auto">
                  <a href="#">
                    <div className="text-center text-6xl font-poppins lg:text-7xl font-bold hover:text-gray-500 pb-4" onClick={toggleTheme}>Hi, I'm Martin 👨🏻‍💻  </div>
                  </a>
                  <div className="text-center container font-poppins mx-auto text-2xl">
                      I'm a Combined Major in Computer Science student at the University of British Columbia. 
                      Incoming SWE Intern @ <a className="text-blue-700" href="https://www.linkedin.com/">LinkedIn. </a>
                      Previously @ <a className="text-indigo-800" href="https://www.blackberry.com/"> Blackberry </a> and 
                      <a className="text-sky-600" href="https://www.holmetrics.com/"> Hölmetrics. </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </>
    )
}