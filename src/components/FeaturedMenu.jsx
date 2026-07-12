import menu from "../data/menu";
import MenuCard from "./MenuCard";

function FeaturedMenu() {
  return (
    <section className="featured-menu" id="menu">

      <h2>
        Featured Dishes
      </h2>

      <div className="menu-grid">

        {menu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedMenu;

