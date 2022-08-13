import { useEffect, useState } from "react";
import { fetchCategories } from "../../utils/requestUtils/HomeRequestUtils";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
    const categories = await fetchCategories();
    setCategories(categories);
    })();
},[])
  return (
    <>
      <div className="categories-container-wrapper">
      <h2 className="md-heading">DISCOVER</h2>
      <div className="categories-container">
      {categories.map(category =>
          <div className="category-container">
            <video
              muted
              loop
              poster={category.posterUrl}
              alt="cuisine"
            >
              <source
                src={category.videoUrl}
                type="video/mp4"
              />
            </video>
            <div className="sm-heading">{category.name}</div>
          </div>)}
      </div>
      </div>
    </>
  );
};
