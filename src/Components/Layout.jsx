import { useState } from "react";
import Sidebar from "./Sidebar";
import React from "react";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen  overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Sidebar onClose={() => setOpen(false)} />
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-6 relative z-0 flex-wrap">
                {/* Mobile Header */}
                <div className="flex items-center gap-3 mb-4 lg:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        className="text-2xl"
                    >
                        ☰
                    </button>

                    
                </div>

                {children}
            </main>
        </div>
    );
};

export default Layout;
