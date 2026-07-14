const wishlist = [
  {
    name: "Formal Suit",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
  },
  {
    name: "Luxury Watch",
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
  },
  {
    name: "Sports Shoes",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

function Wishlist() {
  return (
    <section className="page">

      <h1 className="page-title">
        Wishlist
      </h1>

      <div className="wishlist-grid">

        {wishlist.map((item, index) => (

          <div className="wishlist-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
            />

            <h2>{item.name}</h2>

            <h3>{item.price}</h3>

            <button>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Wishlist;