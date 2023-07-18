
import { Header } from "../components/header";
import Head from "next/head";
import { useEffect } from "react";
import { Projects } from "../components/projects/projects";
import Link from "next/link";

const Blog = () => {
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
        <>
            <Head>
                <title>Blog - Martin Au-yeung</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins"
                    rel="stylesheet"
                ></link>
            </Head>

            <div className="pb-8">
                <Header />
            </div>
            <div className="font-poppins max-w-7xl mx-auto px-4 sm:px-6">
                <Link href="/">
                    <div className="text-lg text-center lg:text-lg font-bold hover:text-gray-500 pb-4">
                        <p> ↵ back to home</p>{" "}
                    </div>
                </Link>
            </div>
            <div>
                <Projects />
            </div>
        </>
    );
};

export default Blog;