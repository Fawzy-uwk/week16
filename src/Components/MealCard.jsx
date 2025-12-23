import React from "react";
import { Link } from "react-router-dom";
const MealCard = ({ image, title, area,id }) => {
    return (
        <div className="meal w-fit text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]">
            <img
                src={image}
                alt={title}
                className=" group-hover:rotate-360 mx-auto duration-700 transition-all rounded-full drop-shadow-xl  -translate-y-22  shadow-2xl"
            />

            <div className="-mt-15">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-green-600 mb-4">{area}</p>

                <Link
                    to={`/meal/${id}`}
                    className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 text-nowrap"
                >
                    View Recipe
                </Link>
            </div>
        </div>
    );
};

export default MealCard;
