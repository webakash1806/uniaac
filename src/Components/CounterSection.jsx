import React from "react";
import CountUp from "react-countup";

const Counter = ({ title, value, suffix = "" }) => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="mb-2 font-normal text-md text-[0.9rem] sm:text-[1.05rem]">{title}</h3>
            <div className="text-3xl font-semibold sm:text-4xl">
                <CountUp end={value} duration={3} />
                {suffix}
            </div>
        </div>
    );
};

const CounterSection = () => {
    return (
        <div className="py-16 bg-gradient-to-tr from-main text-white to-blue-800 from-[40%]">
            <h2 className="mb-4 text-2xl font-semibold tracking-wide text-center sm:text-3xl">
                Facts About Our Institute
            </h2>
            <div className="h-[3.5px] mx-auto mb-16 rounded-full w-36 bg-primary divider"></div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Counter title="Students Passed" value={50000} suffix="+" />
                <Counter title="Students Hired" value={80} suffix="%" />
                <Counter title="Years in Industry" value={8} suffix="+" />
                <Counter title="Expert Mentors" value={100} suffix="+" />
            </div>
        </div>
    );
};

export default CounterSection;
