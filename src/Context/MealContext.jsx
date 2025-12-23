import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const MealContext = createContext();
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const MealProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [mealDetails, setMealDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        const res = await axios.get(`${BASE_URL}/categories.php`);
        setCategories(res.data.categories);
    };

    const fetchMeals = async (category = "All") => {
        setLoading(true);
        const url =
            category === "All"
                ? `${BASE_URL}/search.php?s=`
                : `${BASE_URL}/filter.php?c=${category}`;

        const res = await axios.get(url);
        setMeals(res.data.meals || []);
        setLoading(false);
    };

    const fetchMealById = async (id) => {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
        setMealDetails(res.data.meals[0]);
        setLoading(false);
    };

    useEffect(() => {
        fetchCategories();
        fetchMeals();
    }, []);

    useEffect(() => {
        fetchMeals(selectedCategory);
    }, [selectedCategory]);

    return (
        <MealContext.Provider
            value={{
                meals,
                categories,
                selectedCategory,
                setSelectedCategory,
                fetchMealById,
                mealDetails,
                loading,
            }}
        >
            {children}
        </MealContext.Provider>
    );
};

export const useMeals = () => useContext(MealContext);
