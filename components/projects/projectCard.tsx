import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ project }) => {

  useEffect(() => {
    var replacers = document.querySelectorAll("[data-replace]");
    for (var i = 0; i < replacers.length; i++) {
      let replaceClasses = JSON.parse(
        (replacers[i] as HTMLElement).dataset.replace.replace(/'/g, '"')
      );
      Object.keys(replaceClasses).forEach(function (key) {
        replacers[i].classList.remove(key);
        replacers[i].classList.add(replaceClasses[key]);
      });
    }
  });

  return (
    <div
      className="duration-1000 relative transform transition-all translate-y-96 ease-out"
      data-replace='{"translate-y-96": "translate-y-0" }'
    >
      <Link href={project.href}>
      <div className="pb-4 max-w-8xl w-4xl mx-auto px-4 sm:px-6 transform duration-200 lg:hover:scale-110">
        <div className="flex items-center">
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <div>
              <div className="container mx-auto">
                <div className="relative m-auto">
                  <div className="flex-none md:flex">
                    <div className="z-50 p-3 mt-10 max-w-3xl w-lg grid lg:grid-cols-3 grid-cols-1 cursor-default select-none rounded-lg bg-white lg:hover:bg-blue-50 shadow-xl">
                      <div className="md:ml-5 rounded-full object-cover fitpl-8 h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3 col-span-1">
                        {project.image.length > 0 && (
                          <Image
                            src={project.image}
                            alt="beans"
                            height={850}
                            width={850}
                            className="rounded-xl"
                          />
                        )}
                      </div>
                      <div className="col-span-2">
                        <div className="">
                          <div>
                            <div className="font-semibold font-poppins text-2xl mb-2 ml-2">
                              {project.title}
                            </div>
                            <div className="font-poppins text-md mb-2 ml-2 text-indigo-600">
                              {project.award1}
                            </div>
                            <div className="font-poppins text-md mb-2 ml-2 text-indigo-600">
                              {project.award2}
                            </div>
                            <div className="my-2 mx-2 mr-5">
                              <p className="text-black font-poppins text-sm">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};
