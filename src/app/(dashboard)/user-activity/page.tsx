"use client";
import React from "react";
import ResolveDisputeModal from "./resolve-modal";

const Page = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="flex flex-col items-center justify-center text-black h-screen">
            <p className="text-black">This is the main page</p>
            <button className="bg-[#102A56] px-6 py-3 rounded-[8px]" onClick={() => setOpen(true)}>View Details</button>
            {open && <ResolveDisputeModal onClose={() => setOpen(false)} /> } 
        </div>
    );
};

export default Page;