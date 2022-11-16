import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ post }) => {

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
            <Link href={post.href}>
                <div className="pb-4 max-w-8xl w-4xl mx-auto px-4 sm:px-6 transform duration-200 lg:hover:scale-110">
                    <div className="flex items-center">
                        <div className="flex justify-center lg:w-0 lg:flex-1">
                            <div>
                                <div className="container mx-auto">
                                    <div className="relative m-auto">
                                        <div className="flex-none md:flex">

                                            <div className="z-50 p-3 mt-10 grid grid-cols-1 cursor-default select-none rounded-lg bg-white lg:hover:bg-blue-50 shadow-xl">

                                                <div className="rounded-full object-cover fitpl-8 h-full w-full mb-3 col-span-1">
                                                    {post.image.length > 0 && (
                                                        <Image
                                                            src={post.image}
                                                            alt="beans"
                                                            height={850}
                                                            width={850}
                                                            className="rounded-xl"
                                                        />
                                                    )}
                                                </div>
                                                <div className="col-span-2">
                                                {post.tag && (
                                                    <div className="ml-2 space-x-3 items-center justify-center">
                                                        <span className="font-poppins transform transition-all duration-150 inline-block bg-blue-200 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                                                        {post.tag}
                                                        </span>
                                                    </div>
                                                    )}
                                                    <div className="mt-2">
                                                        <div>
                                                            <div className="font-semibold font-poppins text-2xl mb-2 ml-2">
                                                                {post.title}
                                                            </div>
                                                            <div className="font-poppins text-md mb-2 ml-2 text-indigo-600">
                                                                {post.date}
                                                            </div>
                                                            <div className="my-2 mx-2 mr-5">
                                                                <p className="text-black font-poppins text-sm">
                                                                    {post.description}
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
