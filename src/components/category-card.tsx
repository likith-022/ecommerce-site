
import type { Category } from "../type/category-type";

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="col-6 col-md-3">
      <div className="card border-0 shadow-sm h-100">
        <img
          src={category.image}
          alt={category.name}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

        <div className="card-body text-center py-3">
          <h5 className="card-title fw-semibold mb-0">
            {category.name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
