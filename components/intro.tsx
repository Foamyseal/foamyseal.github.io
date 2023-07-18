import Link from "next/link"

export const Intro = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <div className="max-w-xl mx-auto">
              <a href="#">
                <div className="text-center text-6xl font-poppins lg:text-7xl font-bold hover:text-gray-500 pb-4">Hi, I'm Martin 👨🏻‍💻  </div>
              </a>
              <div className="text-center container font-poppins mx-auto text-2xl pb-8">
                {/* <div>incoming swe @ ????????  </div> */}
                cs & bio graduand @ ubc
                <div>currently in nyc </div>
                <div>based in vancouver, canada </div>
                <div>
                  prev  @ <a className="text-blue-800" href="https://engineering.linkedin.com/teams/data/data-infrastructure/machine-learning-infrastructure">LinkedIn</a>
                </div>
                <div className="md:hidden font-semibold text-center container font-poppins mx-auto text-xl pt-12">
                  quick menu
                </div>
                <div className="md:hidden pt-8 grid grid-cols-3">
                  <Link href="/aboutme">
                    <a className="whitespace-nowrap font-poppins text-xl font-bold hover:text-gray-900">
                    👨🏻‍💻 me
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="whitespace-nowrap font-poppins text-xl font-bold hover:text-gray-900">
                     📚 blog 
                    </a>
                  </Link>
                  <Link href="https://open.spotify.com/playlist/3xo1wkLQzpTjmD0bQU17f3?si=a74e5d568de746be">
                    <a className="whitespace-nowrap font-poppins text-xl font-bold hover:text-gray-900">
                    🎶 music 
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
