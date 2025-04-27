"use client";
import React from "react";
import ResolveDisputeModal from "./resolve-modal";

const page = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="flex flex-col items-center justify-center text-black h-screen">
            <p className="text-black">This is the main page</p>
            <button onClick={() => setOpen(true)}>click this button to show modal</button>
            {open && <ResolveDisputeModal /> } 
        </div>
    );
};

export default page;
