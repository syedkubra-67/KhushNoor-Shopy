const categories = [
  {
    title: "Men",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    items: "Shirts • Jeans • Shoes",
  },
  {
    title: "Women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    items: "Dresses • Handbags • Heels",
  },
  {
    title: "Kids",
    image: "https://images.unsplash.com/photo-1519238359922-989348752efb?w=500",
    items: "Fashion • Toys • Footwear",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    items: "Watches • Jewelry • Bags",
  },
];

function Home() {
  return (
    <section className="page">

      <h1 className="page-title">
        Shop by Category
      </h1>

      <div className="category-grid">

        {categories.map((item, index) => (
          <div className="category-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="category-content">

              <h2>{item.title}</h2>

              <p>{item.items}</p>

              <button>
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Home;