import Link from "next/link";
import { BlogCard } from "./blogCard";


const postDescList = [
    {
        title: "Vancouver to Bay Area Intern",
        date: "November 16th, 2022",
        description:
            "What to do as a student from UBC Vancouver interning in the bay without the support of co-op",
        image: '/blogImages/cardCovers/bay.jpg',
        tag: 'Tech',
        href: "./blog/van-to-bay-intern",
    },
    {
        title: "How I landed my first tech internship",
        date: "April 23rd, 2021",
        description:
            "My internship hunt experience and how I landed my first internship without the support of UBC Co-op",
        image: '/blogImages/cardCovers/internship.jpg',
        href: "./blog/first-internship",
    },
    {
        title: "Switching from Bio to CS @ UBC",
        date: "January 14th, 2020",
        description:
            "How and why I went from being a Bio major at UBC to pivot to tech @ UBC",
        image: '/blogImages/cardCovers/ubc-bio.jpg',
        href: "./blog/bio-to-cs-ubc",
    },

];

export const Blogs = () => {
    return (
        <div className="container mx-auto">
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-center lg:w-0 lg:flex-1">
                            <div className="max-w-xl mx-auto">
                                {/* <Link href="/">
                                    <div className="font-poppins text-md text-center lg:text-lg font-bold hover:text-gray-500 pb-4">
                                        <p> 🏠 back to home</p>{" "}
                                    </div>
                                </Link> */}
                                <h2 className="font-poppins text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">martin's lil blog 📚</h2>
                                <div className="text-center container font-poppins mx-auto text-2xl">
                                    hear my journey, guides, and thoughts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <h1 className="font-poppins text-center font-semibold items-center text-xl">
                my posts
            </h1>
            <div className="text-center -mt-4 text-5xl animate-bounce" >ˬ</div>
            <div className="grid flex-col md:grid-cols-3 px-4 sm:px-6">
                {postDescList.map((post, key) => {
                    return (
                        <BlogCard
                            key={key}
                            post={post}
                        />
                    );
                })}
            </div>
        </div>
    );
};
