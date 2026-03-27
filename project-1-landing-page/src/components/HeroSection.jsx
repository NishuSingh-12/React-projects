function HeroSection() {
  return (
    <main className="hero-container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="sub-heading">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn-container">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <p className="avilable-on">Also Available On</p>
        <div className="shopping-container">
          <img src="public/images/flipKart.svg" alt="flipkart" />
          <img src="public/images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div>
        <img
          className="shoe-img"
          src="public/images/shoe_image.png"
          alt="shoe"
        />
      </div>
    </main>
  );
}

export default HeroSection;
