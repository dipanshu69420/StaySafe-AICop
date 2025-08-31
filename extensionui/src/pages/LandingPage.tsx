
// export const LandingPage = () => {
//     return <>
//         <div className="h-[100vh] w-full flex justify-center items-center">
//             <h1 className="text-white">
//                 StaySafe
//             </h1>
//         </div>
//     </>
// }

"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export function LandingPage() {
    return (
        <div className="h-[100vh] w-full rounded-md bg-neutral-950 gap-3 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    StaySafe
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to StaySafe, your trusted partner for a secure digital world. We provide an advanced, AI-powered system that instantly detects and flags fraudulent online content, so you're always protected.
                </p>
            </div>
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4 absolute bottom-16">
                <h3 className="relative z-10 text-md md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Check Authenticity
                </h3>
                <div className="flex w-[30vw] h-[5vw] justify-between px-[5vw] items-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black h-[2.5rem] justify-center w-[8.5rem] bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>Test Site</span>
                    </HoverBorderGradient>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black h-[2.5rem] w-[8.5rem] justify-center bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>Test App</span>
                    </HoverBorderGradient>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
