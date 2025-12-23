import Layout from "../Components/Layout";
import CategoryTabs from "../Components/CategoryTabs";
import MealCard from "../Components/MealCard";
import { useMeals } from "../Context/MealContext";
import React from "react";
import { ClipLoader } from "react-spinners";

const Home = () => {
    const { meals, loading, selectedCategory } = useMeals();

    if (loading) return <div className="text-center w-full h-full flex items-center justify-center"><ClipLoader size={50} /></div>

    return (

        <Layout>
            <div className="home">
                <h1 className="text-3xl font-bold text-orange-500 mb-6">
                    Learn, Cook, Eat Your Food
                </h1>

                <CategoryTabs />

                {loading ? (
                    <div className="text-center w-full h-full flex items-center justify-center"><ClipLoader size={50} /></div>
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
            </div>
        </Layout>
    );
};

export default Home;
