import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="w-full pb-10 lg:pb-10 lg:pt-4 padding-horizontal">
      <div className="w-full flex items-start justify-center flex-wrap gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
};

export default Categories;
