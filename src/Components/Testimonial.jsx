import React from "react";
import Marquee from "react-fast-marquee"; // Install this package using 'npm i react-fast-marquee'
import cn from 'classnames'; // You may use this utility for conditional classNames, make sure to install using 'npm i classnames'

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 mx-2 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-300 bg-gray-100 hover:bg-gray-200",

            )}
        >
            <div className="flex items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-gray-900 ">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-gray-500 ">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-700 ">{body}</blockquote>
        </figure>
    );
};

export function Testimonial() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full gap-4 py-10 overflow-hidden bg-white rounded-lg">
            <h1 className="py-4 text-3xl font-semibold text-main md:text-4xl">
                Testimonial
            </h1>

            {/* First Marquee Row */}

            <Marquee pauseOnHover speed={30} gradient={false} className="">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            {/* Second Marquee Row - reverse direction */}
            <Marquee pauseOnHover speed={30} direction="right" gradient={false}>
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            {/* Gradient Effects for Visual Fading on Both Sides */}
            <div className="absolute inset-y-0 left-0 z-20 w-1/4 pointer-events-none bg-gradient-to-r from-[#ffffffb2] "></div>
            <div className="absolute inset-y-0 right-0 z-20 w-1/4 pointer-events-none bg-gradient-to-l from-[#ffffffb2] "></div>
        </div>
    );
}
