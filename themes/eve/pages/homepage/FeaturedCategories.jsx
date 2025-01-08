import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop" alt="Shop men" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            PRODUITS FRAIS
          </a>
          <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop" alt="Shop men" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            PRODUITS FRAIS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&h=400" alt="Shop women" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            PRODUITS SECS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=400&h=400" alt="Shop kids" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            BOISSONS
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
