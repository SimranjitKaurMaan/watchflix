export const Categories = () => {
  return (
    <>
      <h2 className="md-heading">Categories</h2>
      <div className="categories-container">
        <div className="category-container">
          <video
            autoPlay
            muted
            loop
            poster="https://res.cloudinary.com/duddwta8d/video/upload/v1651992022/indian_cuisine_yh7kv7.jpg"
            alt="cuisine"
          >
            <source
              src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651992022/indian_cuisine_yh7kv7.mp4"
              type="video/mp4"
            />
          </video>
          <div className="sm-heading">Indian Cuisine</div>
        </div>
        <div className="category-container">
          <video
            autoPlay
            muted
            loop
            poster="https://res.cloudinary.com/duddwta8d/video/upload/v1651992944/chinese_cuisine_tjtdlb.jpg"
            alt="cuisine"
          >
            <source
              src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651992944/chinese_cuisine_tjtdlb.mp4"
              type="video/mp4"
            />
          </video>
          <div className="sm-heading">Chinese Cuisine</div>
        </div>
        <div className="category-container">
          <video
            autoPlay
            muted
            loop
            poster="https://res.cloudinary.com/duddwta8d/video/upload/v1651993176/italian_cusine_emauxd.jpg"
            alt="cuisine"
          >
            <source
              src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651993176/italian_cusine_emauxd.mp4"
              type="video/mp4"
            />
          </video>
          <div className="sm-heading">Italian Cuisine</div>
        </div>
      </div>
    </>
  );
};
