import hero from "./assets/hero.jpg";
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay">

        <h1>
          Premium Fashion Collection
        </h1>

        <p>
          Discover elegant clothing, footwear and accessories
          crafted for every occasion.
        </p>

        <Link to="/categories">
          <button className="shop-btn">
            Explore Collection
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Mainpage;