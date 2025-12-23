import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMeals } from "../Context/MealContext";
import React from "react";
import Layout from "./Layout";

const RecipeDetails = () => {
    const { id } = useParams();
    const { fetchMealById, mealDetails, loading } = useMeals();

    useEffect(() => {
        fetchMealById(id);
    }, [id]);

    if (loading || !mealDetails) return <p className="p-10">Loading...</p>;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push({ ingredient, measure });
        }
    }

    return (
        <Layout className="min-h-screen  p-10">
            <h1 className="text-4xl font-bold mb-6">{mealDetails.strMeal}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image & buttons */}
                <div>
                    <img
                        src={mealDetails.strMealThumb}
                        className="rounded-2xl mb-6"
                        alt="meal"
                    />

                    <div className="flex gap-4">
                        {mealDetails.strYoutube && (
                            <a
                                href={mealDetails.strYoutube}
                                target="_blank"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg"
                            >
                                YouTube
                            </a>
                        )}
                        {mealDetails.strSource && (
                            <a
                                href={mealDetails.strSource}
                                target="_blank"
                                className="bg-green-500 text-white px-6 py-2 rounded-lg"
                            >
                                Source
                            </a>
                        )}
                    </div>
                </div>

                {/* Instructions */}
                <div className="lg:col-span-1">
                    <p className="leading-relaxed whitespace-pre-line">
                        {mealDetails.strInstructions}
                    </p>
                </div>

                {/* Ingredients */}
                <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
                    <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                    <ul className="space-y-3">
                        {ingredients.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between border-b pb-2"
                            >
                                <span>{item.ingredient}</span>
                                <span className="font-semibold">{item.measure}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default RecipeDetails;
