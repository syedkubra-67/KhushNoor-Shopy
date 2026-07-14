const orders = [
  {
    name: "Classic Leather Jacket",
    id: "#KN1021",
    price: "₹4,999",
    status: "Delivered",
  },
  {
    name: "Running Shoes",
    id: "#KN1022",
    price: "₹2,499",
    status: "Shipping",
  },
  {
    name: "Premium Watch",
    id: "#KN1023",
    price: "₹5,999",
    status: "Processing",
  },
];

function Orders() {
  return (
    <section className="page">

      <h1 className="page-title">
        My Orders
      </h1>

      <div className="order-grid">

        {orders.map((item, index) => (

          <div className="order-card" key={index}>

            <h2>{item.name}</h2>

            <p>
              Order ID :
              <strong> {item.id}</strong>
            </p>

            <p>
              Price :
              <strong> {item.price}</strong>
            </p>

            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>

            <button>
              View Details
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Orders;