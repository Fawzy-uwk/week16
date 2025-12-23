import { NavLink } from "react-router-dom";
import React from "react";

const Sidebar = ({ onClose }) => {
    const base =
        "w-full flex items-center gap-3 py-2 px-4 rounded-lg transition"
        ;
    const active = "bg-orange-500 text-white";
    const inactive = "hover:bg-gray-100 text-gray-700";

    return (
        <aside className="w-55 min-h-screen bg-white p-6 fixed z-5">
            <div className="text-2xl font-bold text-orange-500 mb-8">
                Recipe
            </div>

            <nav className="space-y-4">
                <NavLink
                    to="/"
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                        `${base} ${isActive ? active : inactive}`
                    }
                >
                    🍽 Meals
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
