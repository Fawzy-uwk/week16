import Layout from "../Components/Layout";
import CategoryTabs from "../Components/CategoryTabs";
import MealCard from "../Components/MealCard";
import { useMeals } from "../Context/MealContext";
import React from "react";

const Home = () => {
    const { meals, loading, selectedCategory } = useMeals();

    return (
        <Layout>
            <h1 className="text-3xl font-bold text-orange-500 mb-6">
                Learn, Cook, Eat Your Food
            </h1>

            <CategoryTabs />

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 my-16 w-full place-content-center mx-auto">
                    {meals.map(meal => (
                        <MealCard
                            key={meal.idMeal}
                            id={meal.idMeal}
                            title={meal.strMeal}
                            image={meal.strMealThumb}
                            area={meal.strArea || selectedCategory}
                        />
                    ))}
                </div>
            )}
        </Layout>
    );
};

export default Home;
